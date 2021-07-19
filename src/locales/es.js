export default {
  "Limit":"Límite",
  "Offset":"Offset",
  "Item":"Artículo",
  "No Data Available":"Datos no disponibles",
  "Quantity":"Cantidad",
  "Price":"Precio",
  "No Data":"Datos no disponibles",
  "Select date":"Seleccione fecha",
  "Guest ID":"ID de invitado",
  "ID":"ID",
  "Guests":"Invitado",
  "Clear":"Limpiar",
  "Filter":"Filtro",
  "Settings":"Ajustes",
  "Under construction":"Bajo construcción",
  "Order (Quantity)":"Pedido (Cantidad)",
  "Guest": "Invitadas",
  "Orders": "Pedidos",
  "Balances": "Saldos",
  "Start Date": "Fecha de inicio",
  "End Date": "Fecha final",
  "All": "Todas",
  "First Name": "Primer nombre",
  "Last Name": "Apellido",
  "Gender": "Género",
  "E-mail": "Correo electrónico",
  "Visited": "Visitó",
  "Sales": "Ventas",
  "Search": "Buscar",
  "Dashboard": "Tablero",
  vxe: {
    error: {
      groupFixed: 'If you use group headers, the fixed columns must be set by group.',
      groupMouseRange: 'Grouping headers and "{0}" cannot be used at the same time, which may cause errors.',
      groupTag: 'Grouping column header should use "{0}" instead of "{1}", which may cause errors.',
      scrollErrProp: 'The parameter "{0}" is not supported when virtual scrolling is enabled.',
      scrollXNotGroup: 'Horizontal virtual scrolling does not support grouping headers. You need to set the parameter "scroll-x.enabled=false", otherwise, errors may occur.',
      errConflicts: 'Argument "{0}" conflicts with "{1}"',
      unableInsert: 'Unable to insert to the specified location.',
      useErr: 'Error installing "{0}" module, possibly in the wrong order, dependent modules need to be installed before Table.',
      barUnableLink: 'Toolbar cannot associate table.',
      expandContent: 'Expand row slot should be "content", please check if it is correct.',
      reqModule: 'require "{0}" module.',
      reqProp: 'Missing the necessary "{0}" parameter, which can cause error.',
      emptyProp: 'The property "{0}" is not allowed to be empty.',
      errProp: 'Unsupported parameter "{0}", possibly "{1}".',
      colRepet: 'column.{0}="{0}" is duplicated, which may make some features unusable',
      notFunc: 'method "{0}" not exist.',
      notSlot: 'slot "{0}" does not exist',
      noTree: 'The tree structure does not support "{0}".',
      notProp: 'Unsupported parameters "{0}"',
      coverProp: 'The parameter "{1}" to "{0}" is overwritten. This may cause an error',
      delFunc: 'The function "{0}" is deprecated, please use "{1}".',
      delProp: 'The property "{0}" is deprecated, please use "{1}".',
      delEvent: 'The event "{0}" is deprecated, please use "{1}"',
      removeProp: 'The property "{0}" is deprecated and is not recommended, which may cause error.',
      errFormat: 'The global formatted content should be defined with "VXETable.formats". Mounting "formatter={0}" is not recommended.',
      notType: 'Unsupported file types "{0}"',
      notExp: 'The browser does not support import / export.',
      impFields: 'Import failed, please check that the field name and data format are correct.',
      treeNotImp: 'Tree table does not support import.'
    },
    renderer: {
      search: 'Search',
      cases: {
        equal: 'Equal',
        unequal: 'Not equal',
        gt: 'Greater than',
        ge: 'Greater than or equal',
        lt: 'Less than',
        le: 'Less than or equal',
        begin: 'Beginning is',
        notbegin: 'Beginning is not',
        endin: 'End is',
        notendin: 'End is not',
        include: 'Include',
        exclude: 'Exclusive',
        between: 'Betweenness',
        custom: 'Custom filter',
        insensitive: 'Case insensitive',
        isSensitive: 'Case sensitive'
      },
      combination: {
        menus: {
          sortAsc: 'Ascending order',
          sortDesc: 'Descending order',
          fixedColumn: 'Fixed column',
          fixedGroup: 'Fixed group',
          cancelFixed: 'Clear fixed',
          fixedLeft: 'Fixed the left',
          fixedRight: 'Fixed the right',
          clearFilter: 'Clear filter',
          textOption: 'Text filter',
          numberOption: 'Number filter'
        },
        popup: {
          title: 'Custom filtering',
          currColumnTitle: 'Current column:',
          and: 'And',
          or: 'Or',
          describeHtml: 'Use ? To represent a single character <br/> use * to represent any number of characters'
        },
        empty: '(Empty)',
        notData: 'Datos no disponibles'
      }
    },
    pro: {
      area: {
        mergeErr: 'The operation cannot be performed on merged cells',
        multiErr: 'The operation cannot be performed on multiple selection areas',
        extendErr: 'If the extended area contains merged cells, all merged cells need to be the same size'
      },
      fnr : {
        title: 'Find and replace',
        findLabel: 'Find',
        replaceLabel: 'Replace',
        findTitle: 'What to find:',
        replaceTitle: 'Replace with:',
        tabs: {
          find: 'Find',
          replace: 'Replace'
        },
        filter: {
          re: 'Regular Expression',
          whole: 'Whole word',
          sensitive: 'Case sensitive'
        },
        btns : {
          findNext: 'Buscar siguiente',
          findAll: 'Buscar todo',
          replace: 'Reemplazar',
          replaceAll: 'Reemplazar todo',
          cancel: 'Cancelar'
        },
        header: {
          seq: '#',
          cell: 'Cell',
          value: 'Value'
        },
        empty: '(Empty)',
        reError: 'Invalid regular expression',
        recordCount: 'Found {0} cells',
        notCell: 'No matching cells were found',
        replaceSuccess: 'Successfully replaced {0} cells'
      }
    },
    table: {
      emptyText: 'Datos no disponibles',
      allTitle: 'Select all / cancel',
      seqTitle: '#',
      confirmFilter: 'Confirmado',
      resetFilter: 'Reset',
      allFilter: 'All',
      sortAsc: 'Ascending: lowest to highest',
      sortDesc: 'Descending: highest to lowest',
      filter: 'Enable filtering on selected columns',
      impSuccess: 'Successfully imported {0} records',
      expLoading: 'Exporting',
      expSuccess: 'Export success',
      expFilename: 'Export_{0}',
      expOriginFilename: 'Export_original_{0}',
      customTitle: 'Column settings',
      customAll: 'All',
      customConfirm: 'Confirmado',
      customRestore: 'Restaurar'
    },
    grid: {
      selectOneRecord: 'Please choose at least one piece of record!',
      deleteSelectRecord: 'Are you sure you want to delete the selected record?',
      removeSelectRecord: 'Are you sure you want to remove the selected record?',
      dataUnchanged: 'Data unchanged! ',
      delSuccess: 'Successfully deleted the selected record!',
      saveSuccess: 'Saved successfully!',
      operError: 'Error occurred, operation failed!'
    },
    select: {
      emptyText: 'Datos no disponibles'
    },
    pager: {
      goto: 'Ir a',
      pagesize: '{0}/página',
      total: 'Registro {0} total',
      pageClassifier: '',
      prevPage: 'Página anterior',
      nextPage: 'página siguiente',
      prevJump: 'Saltar a la página anterior',
      nextJump: 'Ir a la página siguiente'
    },
    alert: {
      title: 'Message notification'
    },
    button: {
      confirm: 'Confirmado',
      cancel: 'Cancelar'
    },
    import: {
      modes: {
        covering: 'Covering',
        insert: 'Insert'
      },
      impTitle: 'Importar datos',
      impFile: 'Nombre de archivo',
      impSelect: 'Seleccionar archivo',
      impType: 'Tipo de archivo',
      impOpts: 'Configuración',
      impConfirm: 'Importar',
      impCancel: 'Cancelar'
    },
    export: {
      types: {
        csv: 'CSV (separados por comas) (*.csv)',
        html: 'Web Page (*.html)',
        xml : 'XML Data (*. xml)' ,
        txt: 'Texto (delimitado por tabuladores) (*.txt)',
        xls: 'Excel 97-2003 Workbook(*.xls)',
        xlsx: 'Excel Workbook (*.xlsx)',
        pdf : 'PDF (* .pdf)'
      },
      modes: {
        current: 'Datos actuales (datos de la página actual)',
        selected: 'Datos seleccionados (datos seleccionados en la página actual)',
        all: 'Datos completos (incluidos todos los datos de paginación)'
      },
      printTitle: 'Imprimir datos',
      expTitle: 'Exportar datos',
      expName: 'Nombre de archivo',
      expNamePlaceholder: 'Introduzca el nombre de archivo',
      expSheetName: 'Título',
      expSheetNamePlaceholder: 'Introduzca un título',
      expType: 'Guardar el tipo',
      expMode: 'Seleccionar datos',
      expCurrentColumn: 'Todo el campo',
      expColumn: 'Seleccionar campo',
      expOpts: 'Configuración',
      expOptHeader: 'Encabezado',
      expHeaderTitle: '¿Necesito un encabezado?',
      expOptFooter: 'Pie de página',
      expFooterTitle: '¿Necesita la tabla de pie de página?',
      expOptColgroup: 'Encabezado de grupo',
      expColgroupTitle: 'Si existe, se admiten encabezados con estructura de agrupación',
      expOptMerge: 'Combinar',
      expMergeTitle: 'Si existe, se admiten celdas con estructuras fusionadas',
      expOptAllExpand: 'Expandir nodos',
      expAllExpandTitle: 'Si existe, todos los datos con estructura de árbol se pueden expandir',
      expOptUseStyle: 'Estilos',
      expUseStyleTitle: 'Si existe, se admiten celdas con estilos',
      expOptOriginal: 'Datos de origen',
      expOriginalTitle: 'Si son datos de origen, se admite la importación a la tabla',
      expPrint: 'Imprimir',
      expConfirm: 'Exportar',
      expCancel: 'Cancelar'
    },
    modal: {
      zoomIn: 'Maximización',
      zoomOut: 'Reducción',
      close: 'Cerca'
    },
    form: {
      folding: 'Folding',
      unfolding: 'Unfolding'
    },
    toolbar: {
      import : 'Import' ,
      export: 'Export',
      print: 'Printing',
      refresh: 'Refresh',
      zoomIn: 'Full screen',
      zoomOut: 'Reduction',
      custom: 'Column settings',
      customAll: 'All',
      customConfirm: 'Confirmado',
      customRestore: 'Restaurar'
    },
    input: {
      date: {
        m1: 'Enero',
        m2: 'Febrero',
        m3 : 'Marzo' ,
        m4 : 'Abril' ,
        m5: 'Mayo',
        m6: 'Junio',
        m7: 'Julio',
        m8: 'Agosto',
        m9 : 'Septiembre' ,
        m10: 'Octubre',
        m11 : 'Noviembre' ,
        m12: 'Diciembre',
        quarterLabel: '{0}',
        monthLabel: '{0}',
        dayLabel: '{1} {0}',
        labelFormat: {
          date: 'dd/MM/yyyy',
          time: 'HH:mm:ss',
          datetime: 'yyyy-MM-dd HH:mm:ss',
          week: '[Week] WW, yyyy',
          month: 'MM/yyyy',
          quarter: '[Quarter] q, yyyy',
          year: 'yyyy'
        },
        weeks: {
          w: 'Semana',
          w0: 'Sol',
          w1 : 'Mi' ,
          w2: 'Mar',
          w3: 'Mié',
          w4 : 'Jue' ,
          w5 : 'Vie' ,
          w6 : 'Sáb'
        },
        months: {
          m0 : 'Jan' ,
          m1 : 'Feb' ,
          m2 : 'Mar' ,
          m3 : 'Apr' ,
          m4: 'May',
          m5 : 'Jun' ,
          m6 : 'Jul' ,
          m7 : 'Aug' ,
          m8: 'Sep',
          m9: 'Oct',
          m10: 'Nov',
          m11: 'Dec'
        },
        quarters: {
          q1: 'First quarter',
          q2: 'Second quarter',
          q3: 'Third quarter',
          q4: 'Fourth quarter'
        }
      }
    }
  }
}