<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Inventario en servicios farmacéuticos
    
    p.mb-5(data-aos="fade-down") El inventario en los servicios farmacéuticos es un elemento esencial para garantizar la disponibilidad oportuna de medicamentos y dispositivos médicos. Su correcta gestión permite evitar el desabastecimiento, minimizar pérdidas por vencimiento o deterioro, y asegurar la calidad en la atención al usuario. Además, contribuye a la eficiencia financiera, la trazabilidad de los productos y el cumplimiento normativo.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una administración adecuada del inventario favorece la planeación de compras, el seguimiento de tratamientos, y el cumplimiento de auditorías internas y externas. Para lograrlo, es necesario conocer el contenido del inventario inicial, su importancia operativa y legal, así como los objetivos del control de inventarios, los cuales buscan mantener el equilibrio entre la oferta y la demanda, optimizando los recursos disponibles en los servicios farmacéuticos.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Inventario inicial y su contenido
    
    p.mb-5(data-aos="fade-down") El inventario inicial es el registro detallado de todos los productos farmacéuticos, incluidos los medicamentos, dispositivos médicos, insumos y productos afines, que se encuentran disponibles en un establecimiento al iniciar un nuevo periodo de gestión, ya sea operativo, contable, administrativo o logístico.

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Periodo de gestión operativo")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img02.jpg', alt='Imagen decorativa')
          .col-lg-7.order-lg-1.order-2
            p Se refiere al tiempo durante el cual se desarrollan las actividades diarias del servicio farmacéutico, como la recepción de productos, almacenamiento, dispensación, ventas o distribución. Generalmente, se relaciona con la apertura y funcionamiento continuo del establecimiento, y puede abarcar días, semanas o meses, dependiendo del enfoque de gestión.
            p <b>Ejemplo</b>: un establecimiento inicia su operación el 1 de marzo y decide establecer ciclos de control operativo mensuales. Entonces, cada mes constituye un nuevo periodo de gestión operativo, y al iniciar cada uno se puede realizar un inventario o una verificación.

      .py-3.py-md-4(titulo="Periodo de gestión contable")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img03.jpg', alt='Imagen decorativa')
          .col-lg-7.order-lg-1.order-2
            p Corresponde al ciclo definido para registrar, organizar y analizar la información financiera y económica del inventario, como el costo de los productos, las ventas realizadas, los márgenes de utilidad y la valorización de existencias. En Colombia, este periodo suele ser mensual, trimestral o anual, dependiendo de la estructura del negocio y de las exigencias tributarias.
            p <b>Ejemplo</b>: en una droguería registrada como persona jurídica, el periodo contable anual inicia el 1 de enero y finaliza el 31 de diciembre. Al comienzo de ese año contable, se realiza un inventario inicial con fines fiscales y de control financiero.

      .py-3.py-md-4(titulo="Periodo de gestión administrativo")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img04.jpg', alt='Imagen decorativa')
          .col-lg-7.order-lg-1.order-2
            p Hace referencia al ciclo en el cual se toman decisiones organizacionales, se establecen metas de funcionamiento, se evalúa el desempeño del personal y se planifican acciones estratégicas. Dentro de este ámbito, el inventario inicial puede estar vinculado a procesos de cambio de personal, apertura de sedes, ajustes de políticas internas o reestructuraciones.
            p <b>Ejemplo</b>: si una IPS cambia de coordinador del servicio farmacéutico, puede decretarse el inicio de un nuevo periodo administrativo que requiere elaborar un inventario inicial bajo la responsabilidad del nuevo encargado.

      .py-3.py-md-4(titulo="Periodo de gestión logístico")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img05.jpg', alt='Imagen decorativa')
          .col-lg-7.order-lg-1.order-2
            p Este tipo de periodo abarca la planificación, ejecución y evaluación de la cadena de suministro y distribución de productos farmacéuticos. Se relaciona directamente con la gestión de compras, recepción de productos, control de inventario, almacenamiento y distribución interna o externa. Un nuevo periodo logístico puede definirse por ciclos de abastecimiento o distribución.
            p <b>Ejemplo</b>: una central de distribución realiza pedidos cada dos meses. Al comenzar cada ciclo de reposición, se ejecuta un corte logístico del inventario para evaluar existencias, detectar necesidades y organizar el próximo pedido.
    
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Comprender estos distintos enfoques permite planificar y aplicar el inventario inicial de forma coherente con el propósito de cada área. Asimismo, garantiza que las decisiones sobre productos farmacéuticos estén basadas en datos actualizados, precisos y alineados con los objetivos de calidad, eficiencia y cumplimiento normativo del establecimiento.

    p.mb-5(data-aos="fade-down") El inventario inicial cumple una función crítica como punto de partida para el control de existencias. A partir de esta línea base se pueden comparar y validar todos los movimientos posteriores del inventario, como entradas por compras, salidas por dispensación o venta, ajustes por pérdidas, vencimientos, devoluciones o deterioros. Es una herramienta que brinda trazabilidad, transparencia y control.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 ¿Cuándo se realiza un inventario inicial?

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Apertura del establecimiento")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Cuando se inaugura una nueva droguería o farmacia, es obligatorio registrar los productos con los que se inicia la operación.

              .row(numero="2" titulo="Cambio de responsable")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Cuando se designa un nuevo regente, administrador o responsable del área de farmacia, el inventario inicial permite establecer el estado de los productos que recibe.

              .row(numero="3" titulo="Inicio de un nuevo periodo contable o presupuestal")
                .col-12.mb-4.mb-md-0
                  p.mb-0 En IPS, hospitales o entidades públicas, al comenzar un nuevo año fiscal o ciclo de compras.

              .row(numero="4" titulo="Antes de una auditoría o visita de inspección sanitaria")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Para tener claridad sobre lo que se encuentra físicamente y lo que está registrado.

              .row(numero="5" titulo="Reapertura tras suspensión de actividades")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Si una farmacia o droguería ha cerrado temporalmente por mantenimiento, sanción u otra causa.
          .col-lg-5.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Para asegurar la trazabilidad, organización y utilidad del inventario inicial, se recomienda que el registro incluya como mínimo la siguiente información:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Contenido de un inventario inicial</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #FDEEE0")
                th(data-aos="fade-down")(style= "width: 30%") Campo
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td.text-bold(data-aos="fade-down") Nombre del producto
                td(data-aos="fade-down") Nombre comercial y/o principio activo.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Forma farmacéutica
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ejemplo: tabletas, cápsulas, inyectable o suspensión.
              tr
                td.text-bold(data-aos="fade-down") Concentración
                td(data-aos="fade-down") Dosis del principio activo (ej. 500 mg).
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Presentación comercial
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Unidad de empaque (ejemplo: caja x 30 tabletas).
              tr
                td.text-bold(data-aos="fade-down") Cantidad existente
                td(data-aos="fade-down") Número total de unidades.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Número de lote
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite trazabilidad ante devoluciones o alertas sanitarias.
              tr
                td.text-bold(data-aos="fade-down") Fecha de vencimiento
                td(data-aos="fade-down") Determina la rotación y prioridad en el uso.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Ubicación física
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Lugar específico donde se encuentra el producto (estantería, nevera o bodega).
              tr
                td.text-bold(data-aos="fade-down") Proveedor (opcional)
                td(data-aos="fade-down") Útil para devoluciones o gestión comercial.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Costo unitario
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Valor estimado por unidad.
              tr
                td.text-bold(data-aos="fade-down") Valor total del producto
                td(data-aos="fade-down") Costo unitario multiplicado por la cantidad.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Observaciones
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estado del empaque, condiciones especiales o productos próximos a vencer.

    p(data-aos="fade-down") Es fundamental que este inventario se realice de forma manual o sistematizada, dependiendo de los recursos del establecimiento, y que sea verificado por el personal responsable. La información obtenida debe consignarse en formatos establecidos por el servicio, preferiblemente con el respaldo de herramientas tecnológicas que garanticen trazabilidad, seguridad y actualización permanente.
    p.mb-0(data-aos="fade-down") El correcto diligenciamiento del inventario inicial asegura una adecuada planeación de pedidos, evita desabastecimientos o sobrecostos por compras innecesarias, y fortalece el cumplimiento de la normatividad sanitaria vigente, incluyendo la trazabilidad y el control de medicamentos de control especial.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Importancia operativa y legal del inventario
    
    p.mb-5(data-aos="fade-down") El inventario representa un componente fundamental en la gestión de los servicios farmacéuticos, ya que permite controlar los insumos disponibles, garantizar la continuidad en la atención y cumplir con los requisitos normativos establecidos por las autoridades competentes. Desde el punto de vista operativo, contar con un inventario actualizado y bien estructurado permite planificar adecuadamente las compras, evitar el desabastecimiento o la acumulación innecesaria de productos, y reducir riesgos relacionados con pérdidas por vencimiento, deterioro o mala rotación.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img07.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde el enfoque legal y sanitario, el inventario inicial es un requisito que puede ser exigido por las secretarías de salud departamentales o municipales, así como durante visitas de inspección, vigilancia y control por parte de la Superintendencia Nacional de Salud. Este inventario inicial permite demostrar que el establecimiento conoce su stock, controla sus movimientos y aplica las buenas prácticas de almacenamiento, dispensación y trazabilidad de medicamentos y dispositivos médicos, tal como lo establece la normatividad vigente en Colombia, en particular la Resolución 1403 de 2007 y demás disposiciones relacionadas.

    p.mb-5(data-aos="fade-down") Contar con un inventario inicial preciso contribuye a:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .cajon.cajon.C01.p-4.mb-3
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Minimizar errores contables y financieros en la gestión de compras y ventas.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Tomar decisiones informadas sobre pedidos de reposición.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Prevenir situaciones críticas de desabastecimiento o exceso de inventario.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Detectar productos vencidos o en mal estado que requieren disposición adecuada.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                | Establecer políticas internas de rotación de inventario y seguimiento a lotes o fechas de vencimiento, garantizando la trazabilidad y la seguridad del paciente.

    p.mb-5(data-aos="fade-down") Aplicar estos principios en la práctica mejora significativamente la eficiencia del servicio farmacéutico y asegura el cumplimiento normativo. A continuación, se presenta un ejemplo que describe cómo realizar un inventario inicial en un contexto real:

    .row.justify-content-center.mb-0(style="display: flex; width: 100%; margin: auto;")(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-4
              p(data-aos="fade-down") Una farmacia ubicada en un municipio intermedio de Colombia reinicia operaciones luego de un mes de cierre por remodelación. Antes de abrir al público, el administrador realiza un inventario inicial detallado: 
              ul.lista-ul--color
                li(data-aos="fade-down") 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Cuenta todos los productos disponibles.
                li(data-aos="fade-down") 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Registra sus cantidades.
                li(data-aos="fade-down") 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Verifica las fechas de vencimiento.
                li.mb-0(data-aos="fade-down")
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Clasifica los medicamentos según su estado (óptimos, próximos a vencer o descartables).
              p.mb-0(data-aos="fade-down") Esta información se consolida en una base documental que le permitirá tomar decisiones estratégicas de compra, dar cumplimiento a los requisitos de los entes de control y garantizar la disponibilidad de productos seguros y vigentes para la población usuaria.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema1/img08.svg', alt='Imagen decorativa')

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Objetivos del control de inventario
    
    p.mb-5(data-aos="fade-down") El inventario en los servicios farmacéuticos es una herramienta esencial que permite controlar, planificar y optimizar la gestión de los productos que se utilizan, dispensan o comercializan. Este control no solo cumple una función logística, sino que también responde a principios de calidad, eficiencia, seguridad en la atención y sostenibilidad del servicio. Los objetivos del inventario orientan el manejo adecuado de los recursos y establecen parámetros claros para la toma de decisiones administrativas, técnicas y operativas. A continuación, se describen los principales objetivos que debe cumplir un sistema de inventario en el ámbito farmacéutico:

    .tarjeta.tarjeta--BG01.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Garantizar la disponibilidad continua de productos esenciales
            p Uno de los propósitos centrales del inventario es asegurar la existencia permanente y oportuna de medicamentos, dispositivos médicos, insumos y demás productos farmacéuticos requeridos para la atención de los usuarios. Esta disponibilidad debe mantenerse sin interrupciones y bajo criterios de oportunidad, suficiencia y calidad. Para ello, es indispensable que el inventario permita anticipar necesidades, planificar la reposición de productos antes de que se agoten y mantener en stock aquellos elementos considerados críticos o vitales. Esto cobra especial relevancia en servicios farmacéuticos que atienden pacientes con patologías crónicas, en situaciones de urgencia o en poblaciones vulnerables. La falta de disponibilidad compromete la continuidad del tratamiento, afecta la confianza del usuario y puede generar consecuencias adversas para la salud pública.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img09.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Prevenir el desabastecimiento o sobreabastecimiento
            p El inventario debe ser una herramienta para equilibrar la demanda real con la cantidad de productos disponibles. Su función es proporcionar información precisa que permita evitar tanto el desabastecimiento como el exceso de existencias. El desabastecimiento genera riesgos clínicos, quejas de los usuarios, incumplimientos contractuales y fallas en la atención; mientras que el sobreabastecimiento representa una inmovilización de recursos financieros, ocupa espacio de almacenamiento innecesario y aumenta la probabilidad de vencimientos o deterioros. Un inventario eficiente permite al responsable del servicio farmacéutico identificar tendencias de consumo, definir niveles mínimos y máximos de stock, establecer márgenes de seguridad y planificar compras de forma racional.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img10.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Optimizar la inversión en inventario
            p Los productos farmacéuticos representan una parte significativa del capital operativo de una droguería, farmacia institucional o servicio hospitalario. El inventario debe contribuir a que esta inversión se utilice de manera eficiente, racional y estratégica. Esto implica priorizar productos de mayor rotación, evitar adquisiciones innecesarias, analizar el rendimiento de cada línea de productos y reducir pérdidas por vencimiento, obsolescencia o deterioro. Una adecuada gestión financiera del inventario mejora los indicadores de rentabilidad, reduce costos operativos, maximiza la utilidad de los recursos y respalda decisiones sobre compras, precios y promociones. Optimizar la inversión es clave para la sostenibilidad económica del establecimiento, especialmente en contextos con márgenes comerciales estrechos o presupuestos limitados.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Asegurar la trazabilidad y control de los productos
            p La trazabilidad permite seguir el recorrido de un producto desde su ingreso hasta su salida del inventario, ya sea por dispensación, venta, devolución, traslado o descarte. El inventario debe permitir el registro y seguimiento detallado de cada producto: nombre, lote, fecha de vencimiento, proveedor, fecha de ingreso y movimientos internos. Este control es esencial para cumplir con los estándares de calidad, seguridad del paciente y respuesta ante alertas sanitarias. Un sistema bien estructurado facilita la identificación de lotes específicos, permite tomar acciones correctivas frente a productos en mal estado o con problemas sanitarios, y establece responsabilidades claras en el manejo. En servicios farmacéuticos, asegurar la trazabilidad fortalece la transparencia, mejora la eficiencia operativa y protege la salud de los usuarios.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img12.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Cumplir con la normativa sanitaria vigente
            p La legislación colombiana establece múltiples requisitos relacionados con el manejo del inventario en establecimientos farmacéuticos. Autoridades como el INVIMA, la Superintendencia Nacional de Salud y las secretarías de salud exigen mantener registros actualizados, precisos y disponibles para auditorías, inspecciones o seguimientos. Estos registros deben evidenciar una gestión adecuada del inventario conforme a las normas: control de fechas de vencimiento, condiciones de almacenamiento, clasificación de productos, manejo de medicamentos de control especial, y disposición adecuada de residuos. El inventario es, por tanto, una herramienta clave para demostrar conformidad legal y técnica, evitar sanciones y salvaguardar la salud pública.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img13.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Facilitar la toma de decisiones logísticas y administrativas
            p El inventario debe ofrecer información clara, confiable y oportuna que respalde la planeación logística, la programación de compras, la distribución interna, la evaluación de proveedores y la gestión del riesgo. Permite conocer patrones de consumo, identificar necesidades emergentes, anticipar problemas de abastecimiento, evaluar el cumplimiento de contratos de suministro y priorizar acciones administrativas. En un entorno exigente, la capacidad de tomar decisiones rápidas y basadas en datos es esencial para mantener la eficiencia y garantizar la satisfacción del usuario. El inventario no debe ser un registro pasivo, sino un sistema activo de información estratégica.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img14.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Minimizar pérdidas por vencimiento, deterioro o robo
            p Un objetivo esencial del inventario es la prevención de pérdidas económicas, operativas y legales. Las pérdidas por vencimiento surgen cuando los productos no rotan adecuadamente; las de deterioro, por condiciones inadecuadas de almacenamiento; y las de robo o desaparición, por fallas en los controles internos. Un buen inventario permite identificar productos próximos a vencer, organizar según fechas de expiración, aplicar métodos de rotación como PEPS (Primero en Entrar, Primero en Salir), y detectar inconsistencias entre lo registrado y lo físico. Asimismo, facilita la implementación de controles preventivos: acceso restringido, revisiones periódicas y protocolos de descarte. Minimizar pérdidas optimiza recursos, mejora la eficiencia y refuerza la seguridad del servicio farmacéutico.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img15.jpg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") En los servicios farmacéuticos, estos objetivos no solo permiten una gestión técnica y administrativa eficaz, sino que también aportan a la garantía del derecho fundamental a la salud, al asegurar el acceso y la calidad en el suministro de medicamentos.


</template>

<script>
export default {
  name: 'Tema1',
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
