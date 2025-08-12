<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Políticas de inventario
    
    p.mb-5(data-aos="fade-down") La política de inventario corresponde al conjunto de lineamientos estratégicos, normas internas, criterios técnicos y procedimientos operativos que definen cómo se planifica, organiza, ejecuta, monitorea y controla el inventario dentro del servicio farmacéutico. Estas políticas permiten mantener el equilibrio entre la disponibilidad permanente de productos y el uso eficiente de los recursos institucionales, asegurando la calidad del servicio y la seguridad del paciente.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto colombiano, las políticas de inventario deben considerar el tipo y nivel del establecimiento (como droguerías, farmacias institucionales, servicios ambulatorios o intrahospitalarios), las características de la población atendida, los recursos tecnológicos disponibles, la infraestructura física, el talento humano y las exigencias regulatorias establecidas por el Ministerio de Salud y Protección Social, así como por la normatividad vigente en Buenas Prácticas de Almacenamiento (BPA).
    
    p.mb-5(data-aos="fade-down") Estas políticas también deben abordar aspectos clave como los niveles de inventario mínimo y máximo, la frecuencia de pedidos, los mecanismos de control de vencimientos, el tratamiento de productos obsoletos, la rotación de inventario (FIFO/FEFO), la trazabilidad y la gestión de riesgos asociados al desabastecimiento.

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") En síntesis, la política de inventario no es una imposición externa, sino una herramienta de gestión adaptativa que cada establecimiento debe desarrollar de acuerdo con su realidad operativa, con el fin de mejorar la eficiencia, garantizar la continuidad del servicio, cumplir con la regulación sanitaria y promover una cultura de calidad y mejora continua.
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Principios orientadores de la política de inventario
    
    p(data-aos="fade-down") La formulación de una política de inventario en un servicio farmacéutico no puede ser arbitraria ni desarticulada. Debe construirse sobre principios sólidos que garanticen la eficiencia operativa, la seguridad del paciente y la sostenibilidad del sistema. Estos principios actúan como ejes rectores en la toma de decisiones, la asignación de recursos, el diseño de procesos y la implementación de estrategias de control y seguimiento. Además, deben estar alineados con los objetivos institucionales, las necesidades de la población usuaria y el marco normativo nacional.

    p.mb-5(data-aos="fade-down") Entre los principios más relevantes se destacan:

    .tarjeta.tarjeta--BG04.p-4.p-md-5.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="1")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Disponibilidad garantizada
            p Asegurar el acceso continuo y oportuno a los productos esenciales, minimizando el riesgo de desabastecimiento y garantizando la atención ininterrumpida.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img02.jpg', alt='Imagen decorativa')

        .row(titulo="2")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Rotación adecuada del <em>stock</em>
            p Implementar mecanismos que favorezcan el consumo de los productos en el orden adecuado (por ejemplo, PEPS - Primero en Entrar, Primero en Salir), previniendo pérdidas por vencimiento, deterioro u obsolescencia.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img03.jpg', alt='Imagen decorativa')

        .row(titulo="3")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Trazabilidad y control
            p Establecer procedimientos que permitan el seguimiento preciso de cada producto desde su recepción hasta su dispensación o baja, facilitando auditorías, análisis de consumo y toma de decisiones informada.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img04.jpg', alt='Imagen decorativa')

        .row(titulo="4")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Transparencia
            p Garantizar que todos los movimientos, ajustes y decisiones sobre el inventario queden documentados, justificados y disponibles para su revisión, promoviendo la rendición de cuentas.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img05.jpg', alt='Imagen decorativa')

        .row(titulo="5")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Eficiencia económica
            p Procurar el uso racional de los recursos financieros, técnicos y humanos, evitando compras innecesarias, sobrecostos o acumulación excesiva de productos.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img06.jpg', alt='Imagen decorativa')

        .row(titulo="6")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Cumplimiento normativo
            p Asegurar que el manejo del inventario se ajuste a la legislación vigente en Colombia, especialmente a la normatividad expedida por el Ministerio de Salud y Protección Social y la autoridad sanitaria competente.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img07.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La adopción de estos principios permite que la política de inventario no solo cumpla una función operativa, sino que se convierta en un instrumento de mejora continua, que fortalezca la calidad del servicio farmacéutico, optimice los recursos institucionales y contribuya a la protección integral de la salud de los usuarios.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Componentes de una política de inventario
    
    p(data-aos="fade-down") Una política de inventario eficaz debe integrar múltiples componentes que aborden los aspectos operativos, administrativos, técnicos y logísticos de la gestión de productos farmacéuticos. Estos componentes actúan como pilares estructurales que garantizan un control riguroso, una planificación adecuada, una respuesta oportuna ante la demanda y el cumplimiento de los estándares sanitarios.
    p.mb-5(data-aos="fade-down") A continuación, se describen los principales componentes que conforman una política de inventario efectiva:
    
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Criterios de selección de productos
    
    p.mb-5(data-aos="fade-down") Este componente define las reglas que orientan qué productos deben formar parte del inventario. El objetivo es asegurar que los medicamentos, insumos y dispositivos médicos respondan a las necesidades reales de la población usuaria, a las capacidades técnicas del servicio farmacéutico y a los lineamientos institucionales y clínicos vigentes. Los criterios pueden basarse en:

    .row.justify-content-center
      .col-12
        .row.justify-content-center.mb-5(style="display: flex; width: 100%; margin: auto;")
          .col-lg-8.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-3
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-2
                  i.fas.fa-chevron-right
                  | Listados oficiales como el Plan de Beneficios en Salud (PBS) o el Listado de Medicamentos Esenciales.
                li.mb-2
                  i.fas.fa-chevron-right
                  | Perfil epidemiológico de la población atendida.
                li.mb-2
                  i.fas.fa-chevron-right
                  | Demanda histórica y comportamiento de consumo.
                li.mb-2
                  i.fas.fa-chevron-right
                  | Requerimientos especiales de almacenamiento (cadena de frío y humedad).
                li.mb-2
                  i.fas.fa-chevron-right
                  | Nivel de complejidad del establecimiento y del servicio de salud.
                li.mb-0 
                  i.fas.fa-chevron-right
                  | Protocolos clínicos y guías de práctica médica.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema3/img08.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Una selección adecuada contribuye a optimizar los recursos, minimizar desperdicios y garantizar disponibilidad efectiva.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Niveles de <em>stock</em>
    
    p.mb-5(data-aos="fade-down") Define los valores de inventario que deben mantenerse para cada producto, con el fin de asegurar una operación fluida, permiten prevenir desabastecimientos, evitar acumulaciones innecesarias y optimizar el capital de trabajo. Estos niveles incluyen:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img09.svg' alt='AvatarTop')
        h4.text-center <em>stock</em> mínimo
        p.text-center(data-aos="fade-down") Nivel crítico que garantiza la disponibilidad básica.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
        h4.text-center <em>stock</em> máximo
        p.text-center(data-aos="fade-down") Cantidad límite para evitar exceso y vencimientos.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
        h4.text-center <em>stock</em> de seguridad
        p.text-center(data-aos="fade-down") Margen adicional ante eventualidades.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img12.svg' alt='AvatarTop')
        h4.text-center Punto de pedido
        p.text-center(data-aos="fade-down") Cantidad a partir de la cual debe iniciarse el proceso de reposición.

    p.mb-5(data-aos="fade-down") Estos valores deben calcularse considerando el consumo promedio, la rotación, los plazos de entrega, la estacionalidad y la criticidad del producto.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Responsabilidades del personal
    
    p.mb-5(data-aos="fade-down") Establece las funciones, roles y responsabilidades de cada miembro del equipo encargado del inventario. Una distribución clara mejora el control interno, promueve la trazabilidad y asegura continuidad en la gestión. Las responsabilidades típicas incluyen:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.C01.p-4
          .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
            .col-lg-7.col-12.order-lg-2.order-2
              ol.lista-ol--cuadro.lista-ol--separador
                  li.mb-2 
                    .lista-ol--cuadro__vineta
                      span.text-bold 1
                    | Recepción, inspección y validación de productos.
                  li.mb-2 
                    .lista-ol--cuadro__vineta
                      span.text-bold 2
                    | Registro documental y digital de movimientos.
                  li.mb-2 
                    .lista-ol--cuadro__vineta
                      span.text-bold 3
                    | Organización física del inventario y rotulación.
                  li.mb-2 
                    .lista-ol--cuadro__vineta
                      span.text-bold 4
                    | Manejo de herramientas tecnológicas.
                  li.mb-2 
                    .lista-ol--cuadro__vineta
                      span.text-bold 5
                    | Ejecución de inventarios físicos y conciliaciones.
                  li.mb-2 
                    .lista-ol--cuadro__vineta
                      span.text-bold 6
                    | Reporte y seguimiento de incidencias.
                  li.mb-0 
                    .lista-ol--cuadro__vineta
                      span.text-bold 7
                    | Supervisión y mejora continua del sistema de inventario.
            .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
              .row.justify-content-center(data-aos="flip-up")
                .col
                  figure
                    img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Esta asignación debe corresponder con la formación del personal, su disponibilidad y la estructura del establecimiento.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 d) Frecuencia y métodos de inventario
    
    p.mb-5(data-aos="fade-down") Define con qué periodicidad se realiza la verificación del inventario físico y qué métodos se utilizan. Esto permite mantener la congruencia con los registros, detectar pérdidas y prevenir fraudes o errores. Se debe considerar lo siguiente:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-4(data-aos="flip-up")
          .col-12
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema3/img14.svg' alt='AvatarTop')(style= "width: 100%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  h4 Frecuencia
                  p.mb-0(data-aos="fade-down") Mensual, bimestral, trimestral, semestral o continua (inventario rotativo).

      .col-lg-6.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema3/img15.svg' alt='AvatarTop')(style= "width: 100%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  h4 Métodos
                  p.mb-0(data-aos="fade-down") Inventario total, inventario cíclico o rotativo, muestreo estadístico y conteo ciego o doble conteo.

    p.mb-5(data-aos="fade-down") También debe incluir los protocolos de documentación, validación de diferencias, ajustes y comunicación de resultados.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 e) Criterios para compras y reposición
    
    p.mb-5(data-aos="fade-down") Regula el proceso de adquisición, desde la identificación de necesidades hasta la llegada y recepción del pedido. Este componente es clave para evitar desabastecimientos o excesos. Se debe incluir lo siguiente:

    .row.justify-content-center.mb-4(style="display: flex; width: 100%; margin: auto;")
      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img16.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-4.h-100
              h5 Análisis del consumo y proyecciones de demanda.

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img17.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-4.h-100
              h5 Definición de frecuencias de pedido.

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img18.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-4.h-100
              h5 Procedimientos internos de solicitud y aprobación.

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img19.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-4.h-100.m-a
              h5 Evaluación de proveedores (si aplica).

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img20.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-4.h-100
              h5 Condiciones de compra (precio, tiempo de entrega y condiciones comerciales).

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img21.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-4.h-100
              h5 Planes de contingencia ante situaciones de urgencia.

    p.mb-5(data-aos="fade-down") Una compra planificada mejora la eficiencia, reduce costos y asegura la continuidad del servicio.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 f) Manejo de productos próximos a vencer o deteriorados
    
    p.mb-5(data-aos="fade-down") Establece las medidas para gestionar productos en riesgo de vencimiento o que han perdido su integridad. Su objetivo es proteger la seguridad del paciente y cumplir con las normas sanitarias. Se debe incluir lo siguiente:

    .row.cajon.BG05.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img22.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img23.svg' alt='AvatarTop')
                p.text-center Inspecciones regulares del inventario.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img24.svg' alt='AvatarTop')
                p.text-center Identificación y aislamiento de productos comprometidos.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img25.svg' alt='AvatarTop')
                p.text-center Protocolos de devolución a proveedores o destrucción segura.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img26.svg' alt='AvatarTop')
                p.text-center Registro mediante actas o formatos institucionales.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img27.svg' alt='AvatarTop')
                p.text-center Seguimiento de alertas sanitarias emitidas por entidades como el INVIMA.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img28.svg' alt='AvatarTop')
                p.text-center Prohibición de uso o comercialización de productos vencidos, adulterados o en mal estado.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 g) Sistema de información y herramientas tecnológicas

    p.mb-5(data-aos="fade-down") Regula el uso de <em>software</em> o plataformas para el registro y control del inventario. La digitalización del proceso mejora la trazabilidad y la toma de decisiones. Debe contemplar:

    .row.justify-content-center
      .col-lg-10.col-12
        .row.justify-content-center.mb-5(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-3
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-2
                  i.fas.fa-chevron-right
                  | Selección del sistema (institucional, comercial o propio).
                li.mb-2
                  i.fas.fa-chevron-right
                  | Registro automatizado de entradas, salidas, ajustes y vencimientos.
                li.mb-2
                  i.fas.fa-chevron-right
                  | Generación de reportes (rotación, consumo, diferencias y alertas).
                li.mb-2
                  i.fas.fa-chevron-right
                  | Control de accesos por niveles de usuario.
                li.mb-2
                  i.fas.fa-chevron-right
                  | Respaldo, seguridad y recuperación de datos.
                li.mb-0 
                  i.fas.fa-chevron-right
                  | Integración con otros sistemas (compras, facturación e historia clínica).
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema3/img29.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") 

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 h) Control de inventarios especiales
    
    p.mb-5(data-aos="fade-down") Establece los lineamientos para el manejo de productos que requieren condiciones especiales de almacenamiento o documentación, debido a su sensibilidad o regulación. Se debe incluir lo siguiente:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img30.svg' alt='AvatarTop')
        h4.text-center Medicamentos de control especial (psicotrópicos y estupefacientes).

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img31.svg' alt='AvatarTop')
        h4.text-center Productos termolábiles (vacunas, biológicos e insulinas).

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img32.svg' alt='AvatarTop')
        h4.text-center Medicamentos de alto costo o uso restringido.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img33.svg' alt='AvatarTop')
        h4.text-center Productos en programas de farmacovigilancia activa.

    .row.justify-content-center.mb-0(style="display: flex; width: 100%; margin: auto;")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") La política debe definir:
            .cajon.cajon.C01.p-4.mb-3
              ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 1
                  | Requisitos técnicos de conservación (temperatura, humedad y monitoreo continuo).
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 2
                  | Registros oficiales (libros, actas y sistemas específicos).
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 3
                  | Protocolos para trazabilidad total del lote.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 4
                  | Responsables designados para su custodia y seguimiento.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 5
                  | Procedimientos para retiros del mercado o alertas sanitarias.
            p.mb-0(data-aos="fade-down") Una gestión rigurosa de estos productos es obligatoria y está sujeta a inspecciones regulatorias.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema3/img34.png', alt='Imagen decorativa')
    
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Beneficios de implementar una política de inventario
    
    p.mb-5(data-aos="fade-down") Adoptar una política clara, documentada y aplicada sistemáticamente en los servicios farmacéuticos conlleva múltiples beneficios, entre ellos:

    .row.cajon.BG05.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img42.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img35.svg' alt='AvatarTop')
                p.text-center Mejora la organización interna y facilita la toma de decisiones con base en datos objetivos.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img36.svg' alt='AvatarTop')
                p.text-center Disminuye el riesgo de desabastecimiento, vencimiento y pérdidas injustificadas.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img37.svg' alt='AvatarTop')
                p.text-center Fortalece la transparencia y promueve la rendición de cuentas ante auditorías internas y externas.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img38.svg' alt='AvatarTop')
                p.text-center Aumenta la eficiencia logística y financiera del establecimiento.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img39.svg' alt='AvatarTop')
                p.text-center Genera confianza entre usuarios, pacientes y entidades reguladoras.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img40.svg' alt='AvatarTop')
                p.text-center Contribuye al cumplimiento de los estándares de calidad en la atención farmacéutica.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema3/img41.svg' alt='AvatarTop')
                p.text-center Permite detectar fallas de manera oportuna e implementar acciones correctivas.

    p.mb-0(data-aos="fade-down") En conjunto, estos beneficios permiten optimizar el funcionamiento de los servicios farmacéuticos, garantizando la disponibilidad continua y segura de los medicamentos, y asegurando una atención centrada en la calidad, la eficiencia y la responsabilidad institucional.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Consideraciones prácticas para el contexto colombiano
    
    p.mb-5(data-aos="fade-down") En Colombia, muchos servicios farmacéuticos, especialmente en pequeñas droguerías o municipios rurales, operan con recursos limitados y sin acceso a plataformas digitales avanzadas. En estos casos, la política de inventario puede construirse con herramientas básicas, como registros manuales, formatos impresos, hojas de cálculo y controles físicos periódicos. Lo importante es que dicha política esté formalmente definida, adaptada al contexto operativo y conocida por el personal que participa en la gestión del inventario.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.order-lg-2.order-2
            .cajon.cajon.C01.color-primario.p-3.mb-3
              p.mb-0 En instituciones más grandes o urbanas, el uso de <em>software</em> especializado (como SAP, MIPRES o sistemas propios de las IPS), permite automatizar gran parte del proceso. Aun así, la política debe existir como documento de referencia, alineado con los protocolos de calidad, la normatividad sanitaria y los objetivos institucionales.
            p(data-aos="fade-down") La política de inventario en los servicios farmacéuticos no es solo un documento administrativo, sino una herramienta estratégica de gestión. Su correcta implementación permite garantizar la continuidad del servicio, proteger los recursos institucionales y mejorar la calidad de la atención. Todo establecimiento, sin importar su tamaño o ubicación, debe contar con una política de inventario clara, realista, aplicable y evaluable, como base para la organización eficiente del sistema de abastecimiento.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema3/img43.png', alt='Imagen decorativa')
    
    p(data-aos="fade-down") Con el fin de presentar una referencia concreta de cómo puede estructurarse una política de este tipo en un servicio farmacéutico de primer nivel, a continuación, se expone un ejemplo:

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Política de inventario del servicio farmacéutico “Salud Rural”

    .row.justify-content-center.mb-5(data-aos="flip-up")(style="display: flex; width: 100%; margin: auto;")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C05")
          .row(titulo="Objetivo")
            .col-12.mb-0.mb-md-0
              p Garantizar el abastecimiento oportuno y racional de medicamentos esenciales, minimizando pérdidas por vencimiento, deterioro o desabastecimiento.
          .row(titulo="Alcance")
            .col-12.mb-0.mb-md-0
              p Aplica a todas las actividades de gestión de inventario dentro del servicio farmacéutico, incluyendo recepción, almacenamiento, control y distribución de medicamentos y dispositivos médicos.
          .row(titulo="Lineamientos")
            .col-12.mb-0.mb-md-0
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  | El inventario será verificado mensualmente mediante conteo físico, con registro en el formato F-01.
                li
                  i.lista-ul__vineta
                  | Se utilizará el método PEPS (Primero en Entrar, Primero en Salir) para la rotación de productos. 
                li
                  i.lista-ul__vineta
                  p.mb-0 Se establecerá un <em>stock</em> mínimo y máximo para cada medicamento, revisado trimestralmente.
                li
                  i.lista-ul__vineta
                  | Las entradas y salidas se registrarán diariamente en una hoja de cálculo de control, bajo la supervisión del responsable farmacéutico.
                li
                  i.lista-ul__vineta
                  | Se notificará de inmediato cualquier anomalía (producto vencido, faltante o en exceso) al coordinador de salud.
          .row(titulo="Responsables")
            .col-12.mb-0.mb-md-0
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  | Auxiliar de farmacia: encargado del registro diario y control físico.
                li
                  i.lista-ul__vineta
                  | Profesional de farmacia: responsable de la revisión mensual y ajuste de políticas.
                li
                  i.lista-ul__vineta
                  | Coordinador de la IPS: encargado de aprobar cambios y garantizar los recursos logísticos. 
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img44.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
