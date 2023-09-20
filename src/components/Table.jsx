import React, { useMemo, useRef} from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import { useDownloadExcel } from 'react-export-table-to-excel'
import BeatLoader from "react-spinners/BeatLoader";


const Table = ({query, isLoading}) => {


    const columns = useMemo(() => [
        {
            Header: 'Fecha',
            accessor: 'lcl_date'
        },
        {
            Header: 'Hora',
            accessor: 'lcl_time'
        },
        {
            Header: 'Cod agente',
            accessor: 'new_agent_code'
        },
        {
            Header: 'Valor neto',
            accessor: 'co_cc_valor',
            // Cell: props => new Intl.NumberFormat("es-CO", { 
            //     style: "currency", currency: "COP" }).format(props.value),
        },
        {
            Header: 'Tasa aeroportuaria',
            accessor: 'co_cc_tasaAeroportuaria',
            // Cell: props => new Intl.NumberFormat("es-CO", { 
            //     style: "currency", currency: "COP" }).format(props.value),
        },
        {
            Header: 'Iva',
            accessor: 'co_cc_iva',
            // Cell: props => new Intl.NumberFormat("es-CO", { 
            //     style: "currency", currency: "COP" }).format(props.value),
        },
        {
            Header: 'Cod aerolinea',
            accessor: 'co_cc_codAerolinea'
        },
        {
            Header: 'Cod comercio',
            accessor: 'co_cc_cod_comercio'
        },
        {
            Header: 'Tasa admin',
            accessor: 'co_cc_tasaAdministrativa',
            // Cell: props => new Intl.NumberFormat("es-CO", { 
            //     style: "currency", currency: "COP" }).format(props.value),
        },
        {
            Header: 'Iva Tasa admin',
            accessor: 'co_cc_ivaTasaAdmin',
            // Cell: props => new Intl.NumberFormat("es-CO", { 
            //     style: "currency", currency: "COP" }).format(props.value),
        },
        {
            Header: 'Valor total',
            accessor: 'co_cc_valorTotal',
            // Cell: props => new Intl.NumberFormat("es-CO", { 
            //     style: "currency", currency: "COP" }).format(props.value),
        },
        {
            Header: 'Prefijo',
            accessor: 'cc_prefix'
        },
        {
            Header: 'Numero TC',
            accessor: 'cc_number'
        },
        {
            Header: 'Tipo de viaje',
            accessor: 'intl_DOM_FLAG'
        },
        {
            Header: 'Respuesta 1',
            accessor: 'co_cc_MsgResp1_desc'
        },
        {
            Header: 'Respuesta 2',
            accessor: 'co_cc_MsgResp2_desc'
        },
        {
            Header: 'Record',
            accessor: 'co_cc_codReferencia'
        },
        {
            Header: 'VCH TKT',
            accessor: 'vch_TKT'
        },
        {
            Header: 'Auth TKT',
            accessor: 'auth_TKT'
        },
        {
            Header: 'VCH TA',
            accessor: 'vch_TA'
        },
        {
            Header: 'Auth TA',
            accessor: 'auth_TA'
        },
        {
            Header: 'Nombre comercio',
            accessor: 'co_cc_nom_comercio'
        },
        {
            Header: 'Nombre cliente',
            accessor: 'co_cc_codRef4'
        },
        {
            Header: 'Ref cliente',
            accessor: 'co_cc_codRef2'
        },
        {
            Header: 'Viajero',
            accessor: 'co_cc_codRef3'
        },
        {
            Header: 'Referencia',
            accessor: 'co_cc_codRef5'
        },
      ],
      [])
    
      const tableInstance = useTable({ columns, data: query, initialState: { pageSize: '20' } }, useSortBy, usePagination)
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize,
      } = tableInstance

      const tableRef = useRef(null);

      const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "Report",
        sheet: "Report",
      });

      const { pageIndex, pageSize } = state

        if(isLoading){
            return <div>
                <div className='container-button-exls'>
                    <button onClick={onDownload} className='button-exls'><b>Descargar Excel</b></button>
                </div>
                <table ref={tableRef} className="table" {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th style={{width: "100px"}} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {
                                        column.render('Header')}
                                        <span>
                                            {
                                                column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''
                                            }
                                        </span>
                                </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
            </table>

        <div className='form-container_loader'>
           <h3>Realizando consulta...</h3> <BeatLoader color='#fc5534' loading={isLoading} size={50} aria-label="Loading Spinner" data-testid="loader"/>
        </div>

            </div>

        }else {
            return <div>

            <div className='container-button-exls'>
                <button onClick={onDownload} className='button-exls'><b>Descargar Excel</b></button>
            </div>
            <table ref={tableRef} className="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th style={{width: "100px"}} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {
                                    column.render('Header')}
                                    <span>
                                        {
                                            column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''
                                        }
                                    </span>
                            </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                    page.map(row => {
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {
                            row.cells.map(cell => {
                                return (
                                <td {...cell.getCellProps()}>
                                    {
                                    cell.render('Cell')}
                                </td>
                                )
                            })}
                        </tr>
                        )
                    })}
                </tbody>
            </table>
                    
            <div className='table_pagination'>
                <span>
                    Pagina{' '}
                    <strong>
                        {pageIndex +1} de {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Ir a pagina: {' '}
                    <input type="number" defaultValue={pageIndex + 1} onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
                        gotoPage(pageNumber)
                    }} 
                    style={{ width: '40px', border: '1px solid', padding: '0'}}
                    />
                </span>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [20, 40, 60, 80, 2000].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                ver {pageSize}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Anterior</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Siguiente</button>
                <button onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
            
    </div>

        }
        
}

export default Table