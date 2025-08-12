<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Fundamentos técnicos de la operación del inventario
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El adecuado funcionamiento del inventario en los servicios farmacéuticos requiere de una base técnica que oriente las decisiones operativas y estratégicas. Esta base está conformada por parámetros que permiten monitorear y controlar el flujo de productos, así como por clasificaciones que organizan los insumos de acuerdo con criterios funcionales, económicos y clínicos. La comprensión de estos fundamentos permite garantizar la eficiencia del servicio, reducir desperdicios y mejorar la disponibilidad de medicamentos en el momento y lugar requeridos.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Parámetros operativos
    
    p(data-aos="fade-down") Los parámetros operativos del inventario permiten establecer criterios claros para el control y la reposición de productos, asegurando que los niveles de existencias sean adecuados para la demanda. Estos parámetros se definen con base en el comportamiento del consumo, los tiempos de reabastecimiento, la naturaleza de los productos y la capacidad de almacenamiento. Comprender y aplicar correctamente estos parámetros permite minimizar el riesgo de desabastecimiento o exceso de inventario, optimizando así la gestión logística y financiera de la organización.
    p.mb-5(data-aos="fade-down") A continuación, se presentan los principales parámetros operativos del inventario, junto con su definición y un ejemplo práctico:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Parámetros operativos del inventario</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #FDEEE0")
                th(data-aos="fade-down")(style= "width: 30%") Parámetro
                th(data-aos="fade-down")(style= "width: 60%") Definición
                th(data-aos="fade-down")(style= "width: 30%") Ejemplo práctico
            tbody
              tr
                td.text-bold(data-aos="fade-down") Nivel de <em>stock</em> mínimo
                td(data-aos="fade-down") Corresponde a la cantidad mínima que se debe mantener en existencia de un producto para evitar el desabastecimiento. Se calcula con base en el consumo promedio y el tiempo de entrega del proveedor. Actúa como señal de alerta para iniciar el proceso de reposición antes de que se agoten las existencias.
                td(data-aos="fade-down") 50 unidades de acetaminofén de 500 mg.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Nivel de <em>stock</em> máximo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Define la cantidad tope que puede mantenerse en inventario sin comprometer espacio, recursos ni condiciones de almacenamiento. Su propósito es evitar la sobreacumulación, optimizar la inversión y reducir el riesgo de vencimientos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 200 unidades de amoxicilina 500 mg.
              tr
                td.text-bold(data-aos="fade-down") Punto de pedido
                td(data-aos="fade-down") Es el nivel exacto del inventario en el que debe realizarse una nueva orden de compra. Este punto se calcula sumando el consumo promedio durante el tiempo de reabastecimiento más el margen de seguridad, si aplica. Un cálculo correcto asegura que el producto esté disponible en el momento necesario.
                td(data-aos="fade-down") Cuando queden 80 unidades de insulina.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo de reabastecimiento (<em>lead time</em>)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Es el periodo entre la solicitud de un producto y su recepción en el establecimiento. Incluye la aprobación, el despacho del proveedor y el transporte. Este valor influye directamente en el punto de pedido y en la planificación de compras.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 7 días hábiles para entrega de guantes quirúrgicos.
              tr
                td.text-bold(data-aos="fade-down") Frecuencia de revisión
                td(data-aos="fade-down") Hace referencia a la periodicidad con la que se realiza el conteo físico y verificación del inventario. Puede ser diaria, semanal, mensual o rotativa, según la rotación del producto, el tipo de establecimiento y la criticidad del servicio. Su implementación permite detectar errores, pérdidas, vencimientos y garantizar la confiabilidad de los datos registrados.
                td(data-aos="fade-down") Cada semana para productos de alta rotación.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Consumo promedio
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Indica la cantidad promedio de unidades utilizadas en un periodo determinado. Se calcula dividiendo el total consumido entre los días, semanas o meses del periodo. Esta información es clave para definir los niveles de <em>stock</em> y anticipar la demanda.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 300 jeringas de 10 ml por mes.
              tr
                td.text-bold(data-aos="fade-down") Margen de seguridad
                td(data-aos="fade-down") Es una cantidad adicional que se conserva en el inventario para hacer frente a imprevistos como retrasos en la entrega, aumento inesperado de la demanda o errores de cálculo. Este margen se suma al nivel mínimo para definir un punto de pedido más seguro.
                td(data-aos="fade-down") 30 unidades adicionales de solución salina al mes.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Índice de rotación del inventario
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Refleja la frecuencia con que se renueva completamente el inventario en un periodo determinado. Se calcula dividiendo el consumo total entre el inventario promedio. Un índice alto indica buena rotación; uno bajo, exceso de productos o ineficiencia operativa.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Un producto que se vende y se repone 6 veces al año.
                

    p.mb-0(data-aos="fade-down") El seguimiento constante de estos parámetros permite al responsable del servicio farmacéutico tomar decisiones informadas, anticipar necesidades y mejorar el desempeño logístico, económico y clínico del inventario.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Clasificaciones
    
    p.mb-5(data-aos="fade-down") Dentro de la gestión de inventarios, es fundamental aplicar sistemas de clasificación que permitan optimizar el uso de los recursos, mejorar el control y facilitar la toma de decisiones. A continuación, se describen dos de las clasificaciones más utilizadas en contextos logísticos y hospitalarios:
    
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Clasificación ABC

    p.mb-5(data-aos="fade-down") Es una técnica basada en el principio de Pareto, la cual permite segmentar los productos del inventario según su impacto económico o relevancia operativa. En esta clasificación, los productos se dividen en tres categorías:
    
    .row.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Clase A
              p.mb-0.text-center Representa un porcentaje reducido del total de referencias (aproximadamente el 10-20 %), pero concentra el mayor valor monetario (70-80 %). Requiere un control estricto y reposiciones frecuentes, ya que cualquier desabastecimiento puede afectar gravemente el funcionamiento del sistema.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Clase B
              p.mb-0.text-center Comprende productos de valor intermedio (alrededor del 15-25 %), que requieren un control regular pero no tan riguroso como los de clase A.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Clase C
              p.mb-0.text-center Incluye la mayoría de los productos (55-70 %), pero con un impacto económico bajo. Suelen tener un control menos frecuente, y la reposición puede hacerse en mayor cantidad para reducir costos operativos.

    p.mb-5(data-aos="fade-down") Esta clasificación permite priorizar esfuerzos, recursos y controles, así como planificar estratégicamente el almacenamiento y la reposición de inventario.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema2/img05.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") <b>Ejemplo</b>: en un entorno hospitalario, los medicamentos oncológicos suelen clasificarse como tipo A por su alto costo y criticidad clínica. Por otro lado, insumos como gasas o jeringas suelen estar en la categoría C, debido a su bajo costo y alta disponibilidad.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Clasificación por rotación
    
    p.mb-5(data-aos="fade-down") Este enfoque organiza los productos según la frecuencia con la que son consumidos o utilizados. La velocidad de rotación es un indicador clave para definir estrategias de almacenamiento, abastecimiento y control de inventario. Se distinguen tres categorías principales:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img09.svg", alt="alt").img130.m-auto
          h4.text-center Alta rotación
          p.mb-0 Productos que tienen un movimiento constante y requieren reposiciones frecuentes. Suelen ubicarse en zonas de fácil acceso y con mayor visibilidad.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt").img130.m-auto
          h4.text-center Rotación media
          p.mb-0 Productos con una salida moderada, que requieren un seguimiento periódico para evitar sobre <em>stock</em> o desabastecimiento.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img11.svg", alt="alt").img130.m-auto
          h4.text-center Baja rotación
          p.mb-0 Productos que permanecen largo tiempo en el inventario sin ser utilizados. Este grupo requiere una revisión cuidadosa para evitar vencimientos, deterioro o inmovilización de capital.
    
    p.mb-5(data-aos="fade-down") Esta clasificación es especialmente útil para optimizar el espacio de almacenamiento, reducir pérdidas y mejorar la eficiencia logística.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema2/img06.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") <b>Ejemplo</b>: en una farmacia institucional, las tabletas de acetaminofén se consideran de alta rotación por su uso frecuente; los inhaladores pueden clasificarse como de rotación media; mientras que ciertos medicamentos especializados, con usos esporádicos, se consideran de baja rotación.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Clasificación por criticidad
    
    p.mb-5(data-aos="fade-down") Esta clasificación agrupa los productos según el impacto que tendría su ausencia en los procesos operativos. Los artículos críticos son indispensables para la continuidad del servicio o producción; los esenciales son necesarios, pero pueden ser sustituidos temporalmente, y los no esenciales pueden postergarse sin afectar significativamente la operación. Esta clasificación es vital en contextos como el hospitalario o industrial, donde la disponibilidad inmediata de ciertos insumos es crucial.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema2/img07.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") <b>Ejemplo</b>: un desfibrilador o un medicamento de reanimación es crítico; un termómetro puede considerarse esencial; y un folleto informativo podría clasificarse como no esencial.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Clasificación XYZ (o por variabilidad de la demanda)
    
    p.mb-5(data-aos="fade-down") Esta técnica se basa en la estabilidad de la demanda. Los productos X tienen una demanda constante y predecible; los Y presentan variaciones moderadas; y los Z tienen una demanda irregular o esporádica. Esta clasificación permite ajustar los métodos de aprovisionamiento y planificación de compras.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema2/img08.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") <b>Ejemplo</b>: las jeringas estandarizadas pueden tener demanda constante X, mientras que los reactivos de laboratorio especiales pueden clasificarse como Z.

</template>

<script>
export default {
  name: 'Tema2',
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
