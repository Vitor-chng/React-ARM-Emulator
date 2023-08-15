import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { TableDict } from "../../interfaces/Interfaces";
import { theme } from "../../styles/ColorTheme";


import './styles.scss';

interface ITableProps {
    title?: string,
    data: TableDict[],
    perPege?: number,
    binary?: number
    decimal?: number,
}

const ColorTable: React.FC<ITableProps> = (
    { title = '', data, perPege = 10, binary = 0,decimal=0 }) => {
    const colors = theme.colors
    const [tableData, setTableData] = useState<TableDict[]>(data);
    const [page, setPage] = useState<number>(1)
    const [maxPages, setMaxPages] = useState<number>(-1)
    const ref = useRef<HTMLTableElement>(null)


    useEffect(() => {
        let newTable = data
        setTableData(newTable)
    }, [data])

    useEffect(() => {
        if (data.length > perPege) {
            setMaxPages(Math.ceil(data.length / perPege))
        }
    }, [])


    const Rows = () => {
        const row: JSX.Element[] = []
        tableData.forEach((value, id) => {
            if (Math.ceil((id + 1) / perPege) === page)
                row.push(
                    <React.Fragment key={id}>
                        <tr
                            className='TableRow'>
                            {Row(value, id)}
                        </tr>
                    </React.Fragment>
                )
        })
        return row;
    }

    const Row = (value: TableDict, id: number) => {
        const row: JSX.Element[] = []
        for (let i = 0; i < Object.keys(value).length; i++) {
            let style = {}
            if (id === data.length - 1) {
                if (i === Object.keys(value).length - 1)
                    style = { borderBottomRightRadius: '7px' }
                else if (i === 0)
                    style = { borderBottomLeftRadius: '7px' }
            }
            let cellValue = value[i]
            if (binary > 0) {
                let num = value[i]
                cellValue = num.toString(2);
                while (cellValue.length < binary) {
                    cellValue = '0' + cellValue;
                }
            }else if(decimal > 0 &&  typeof cellValue === 'number'){
                let num = value[i]
                cellValue = num.toString(10);
                while (cellValue.length < decimal) {
                    cellValue = '0' + cellValue;
                }
            }
            
            let color = ''
            if((value[i]) > 16777215){
                color = "FFFFFF"
            }else color = parseInt(cellValue.toString(), 2).toString(16).toUpperCase()
            while (color.length < 6) {
                color = '0' + color;
            }
            style = { backgroundColor: `#`+color }
            row.push(
                <td className="TableColorCell"  key={`${value[i]}${id}${i}` }
                    style={style}>
                    <div className="TableCellColorContent" style={style}>
                    </div>
                </td>)
        }
        return row;
    }


    const pageChangeHandle = (page: number) => {
        if (page > 0 && page <= maxPages)
            setPage(page)
    }

    const pageArrows = () => {

        return (
            <>
                <div style={pageArrowStyle(2, true)}>
                    <IconContext.Provider value={{ color: colors.forteBlue, size: '1em' }} >
                        <RxDoubleArrowLeft onClick={() => pageChangeHandle(1)} />
                    </IconContext.Provider>
                </div>
                <div style={pageArrowStyle(1, true)}>
                    <IconContext.Provider value={{ color: colors.forteBlue, size: '1em' }} >
                        <MdKeyboardArrowLeft onClick={() => pageChangeHandle(page - 1)} />
                    </IconContext.Provider>
                </div>
                {page}
                <div style={pageArrowStyle(maxPages, false)}>
                    <IconContext.Provider value={{ color: colors.forteBlue, size: '1em' }} >
                        <MdKeyboardArrowRight onClick={() => pageChangeHandle(page + 1)} />
                    </IconContext.Provider>
                </div>
                <div style={pageArrowStyle(maxPages - 1, false)}>
                    < IconContext.Provider value={{ color: colors.forteBlue, size: '1em' }} >
                        <RxDoubleArrowRight onClick={() => pageChangeHandle(maxPages)} />
                    </IconContext.Provider>
                </div>
            </>
        )
    }

    const pageArrowStyle = (value: number, higher: boolean) => {
        let style: CSSProperties = { visibility: 'hidden', pointerEvents: 'none' };

        if ((page > value && higher === true) || (page < value && higher === false))
            style = {}

        return style
    }

    return (
        <div className='TableConteiner'>
            <h2>{title}</h2>
            <table className='Table' ref={ref}>
                <thead >
                </thead>
                <tbody>
                    {Rows()}
                </tbody>
            </table>
            {(maxPages > 0) &&
                <div className='PageSelector'>
                    {pageArrows()}
                </div>}
        </div >
    );
}

export default ColorTable;