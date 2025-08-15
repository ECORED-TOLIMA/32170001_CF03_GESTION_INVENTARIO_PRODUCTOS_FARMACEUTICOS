export default {
  global: {
    componenteFormativo: 'Control de inventario de productos farmacéuticos.',
    descripcionCurso:
      'Este componente aborda los conceptos, métodos y herramientas para el control de inventarios en servicios farmacéuticos, con énfasis en la trazabilidad, el cálculo de <em>stock</em> y el uso de tecnologías. Su propósito es fortalecer la gestión eficiente y segura de los productos, garantizando su disponibilidad, calidad y cumplimiento de los lineamientos normativos del sector.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Inventario en servicios farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Inventario inicial y su contenido',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia operativa y legal del inventario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Objetivos del control de inventario',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos técnicos de la operación del inventario',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Parámetros operativos', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Clasificaciones', hash: 't_2_2' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Políticas de inventario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios orientadores de la política de inventario',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Componentes de una política de inventario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Beneficios de implementar una política de inventario',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Consideraciones prácticas para el contexto colombiano',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Métodos de control de inventario',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Métodos tradicionales', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Métodos complementarios', hash: 't_4_2' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cálculo de <em>stock</em> en inventarios farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de <em>stock</em> y su cálculo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Ejemplo práctico de cálculo de <em>stock</em>',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elementos y momentos de la trazabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elementos clave de un sistema de trazabilidad',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Momentos críticos de la trazabilidad',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Ventajas operativas de la trazabilidad',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Aplicación según tipo de servicio farmacéutico',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Buenas prácticas complementarias',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Herramientas tecnológicas para el control de inventario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tecnologías aplicadas al inventario farmacéutico',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Implementación de herramientas tecnológicas y sus desafíos',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Gestión documental y análisis de reportes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Verificación de formatos de control',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Análisis de reportes de inventario',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_32170001_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Inventario en servicios farmacéuticos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Funcionamiento de los almacenes [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jTFqJAc0SRA',
    },
    {
      tema: 'Métodos de control de inventario',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Control de mercancía [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J2iDAKwq0u8',
    },
  ],
  glosario: [
    {
      termino: 'Codificación',
      significado:
        'asignación de un código único a cada producto para facilitar su identificación, control y trazabilidad dentro del sistema.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'proceso de organización, control y archivo de los documentos relacionados con el manejo de inventario, que respalda la trazabilidad y la legalidad.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'medidas cuantitativas que permiten evaluar el desempeño del control de inventario y tomar decisiones informadas.',
    },
    {
      termino: 'Inventario',
      significado:
        'registro ordenado y actualizado de los productos almacenados en un servicio farmacéutico, que permite controlar entradas, salidas y existencias.',
    },
    {
      termino: 'Método PEPS (Primero en Entrar, Primero en Salir)',
      significado:
        'estrategia de rotación de inventario en la que los productos que ingresan primero son los primeros en salir, útil para evitar vencimientos.',
    },
    {
      termino: 'Política de inventario',
      significado:
        'conjunto de lineamientos y criterios establecidos para gestionar el inventario de manera eficiente, segura y conforme a la normativa.',
    },
    {
      termino: 'Sistema automatizado de inventario',
      significado:
        'herramienta tecnológica que permite registrar, controlar y analizar los movimientos de inventario de forma eficiente y en tiempo real.',
    },
    {
      termino: '<em>Stock</em> máximo',
      significado:
        'cantidad límite que puede almacenarse de un producto, con el fin de evitar excedentes y pérdidas por vencimiento.',
    },
    {
      termino: '<em>Stock</em> mínimo',
      significado:
        'cantidad mínima de un producto que debe mantenerse en inventario para evitar desabastecimientos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de seguir el historial, la aplicación o la ubicación de un producto farmacéutico a lo largo de toda la cadena de suministro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cano, J. A., & Hernández, L. M. (2019). Gestión de inventarios en instituciones de salud. Editorial Médica Panamericana.',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (s. f.). Página oficial del INVIMA.',
      link: 'https://www.invima.gov.co/',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2005). Decreto 2200 de 2005: Por el cual se reglamenta el servicio farmacéutico y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16944',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Resolución 1403 de 2007: Por la cual se definen los procedimientos y condiciones de la organización y funcionamiento de los servicios farmacéuticos.',
      link:
        'https://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2004). Resolución 886 de 2004: Por la cual se establecen normas en relación con los servicios farmacéuticos.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_0886_de_2004.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012). Política farmacéutica nacional.',
      link:
        'https://www.minsalud.gov.co/Paginas/Pol%C3%ADtica%20Farmac%C3%A9utica%202012.aspx',
    },
    // {
    //   referencia:
    //     'Ministerio de Salud y Protección Social. (2023). Manual de condiciones de habilitación para servicios farmacéuticos.',
    //   // link: 'https://www.minsalud.gov.co',
    // },
    // {
    //   referencia:
    //     'Organización Mundial de la Salud. (2019). Buenas prácticas de almacenamiento y distribución de productos farmacéuticos.',
    //   // link: 'https://www.who.int',
    // },
    // {
    //   referencia:
    //     'Pérez, M. L. (2021). Control de inventarios en servicios farmacéuticos hospitalarios. Revista Colombiana de Farmacia, 55(3), 214–228.',
    //   // link: 'https://doi.org/10.15446/rcfar.v55n3.91234',
    // },
    {
      referencia:
        'Zúñiga, S. & Rodríguez, A. (2020). Trazabilidad y gestión de inventario en farmacias hospitalarias. Editorial Aula Médica.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
