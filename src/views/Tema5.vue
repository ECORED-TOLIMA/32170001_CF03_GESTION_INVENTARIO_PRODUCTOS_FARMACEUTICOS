<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 5
      h1 Cálculo de <em>stock</em> en inventarios farmacéuticos
    
    p.mb-5(data-aos="fade-down") El cálculo del <em>stock</em> en un servicio farmacéutico constituye una actividad estratégica que permite mantener el equilibrio entre la disponibilidad de productos y la eficiencia operativa. Su correcta ejecución garantiza que los medicamentos y productos sanitarios estén disponibles en las cantidades adecuadas y en el momento oportuno, evitando pérdidas por vencimiento, sobrecostos por compras innecesarias o interrupciones en los tratamientos.
    
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-6.col-12.order-lg-2.order-2
            .cajon.cajon.C01.color-primario.p-3.mb-3
              p.mb-0 En el contexto colombiano, esta labor debe desarrollarse de acuerdo con los lineamientos del Decreto 2200 de 2005 y la Resolución 1403 de 2007, que establecen criterios para la gestión de inventarios, definen la responsabilidad del personal encargado e impulsan el uso de herramientas que garanticen trazabilidad y control.
            p(data-aos="fade-down") El análisis de los distintos tipos de <em>stock</em> y su cálculo adecuado permite tomar decisiones informadas para garantizar una reposición oportuna, un almacenamiento eficiente y una mayor seguridad en el manejo de los productos farmacéuticos.
          .col-lg-6.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img01.png', alt='Imagen decorativa')
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Tipos de <em>stock</em> y su cálculo
    
    p.mb-5(data-aos="fade-down") La gestión adecuada del inventario en una institución de salud es clave para garantizar la continuidad del servicio y la atención oportuna al paciente. A continuación, se describen los principales tipos de <em>stock</em> utilizados en el control de inventarios, junto con las fórmulas asociadas para su cálculo.

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="<em>Stock</em> máximo")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img02.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Representa la cantidad más alta que puede mantenerse de un producto en inventario sin incurrir en sobrecostos por almacenamiento ni comprometer su integridad. Su determinación depende de factores como la capacidad del almacén, la demanda histórica, la frecuencia de pedidos y la vida útil del producto. Mantener este límite permite prevenir excesos que puedan deteriorar los productos, especialmente aquellos con requerimientos especiales como cadena de frío o sensibilidad a la humedad.

      .py-3.py-md-4(titulo="<em>Stock</em> mínimo")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img03.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Es la cantidad mínima requerida para garantizar la continuidad del servicio sin interrupciones. Este nivel funciona como una señal de advertencia para realizar un nuevo pedido. El stock mínimo debe calcularse considerando el consumo promedio diario y los tiempos promedio de entrega del proveedor, de manera que se evite el desabastecimiento.

      .py-3.py-md-4(titulo="<em>Stock</em> de seguridad")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img04.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Corresponde a una reserva adicional de productos que permite afrontar eventualidades como demoras del proveedor, aumentos inesperados en la demanda o situaciones de emergencia. Este tipo de <em>stock</em> se calcula con base en la criticidad del producto, la variabilidad del consumo y la estabilidad del suministro. En productos vitales o de control especial, se recomienda mantener un nivel más alto de <em>stock</em> de seguridad.

      .py-3.py-md-4(titulo="Punto de pedido")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img05.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Es el nivel de inventario en el que debe realizarse una nueva solicitud de compra, considerando el tiempo necesario para recibir el pedido sin que se agote el inventario. Este punto se determina a partir del consumo promedio diario y el tiempo de reabastecimiento. Su cálculo adecuado evita quiebres de <em>stock</em> que comprometan la prestación del servicio.

    p.mb-5(data-aos="fade-down") Las fórmulas de cálculo permiten determinar de manera precisa los niveles óptimos de inventario y establecer puntos de control que garanticen la disponibilidad de productos sin incurrir en excesos. A partir del consumo promedio diario y el tiempo de entrega, es posible calcular el punto de pedido, el <em>stock</em> de seguridad y los niveles mínimos y máximos de inventario. A continuación, se presentan las fórmulas más comunes empleadas para estos fines:

    .row.justify-content-center.mb-0
      .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG07.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-4.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img06.svg' alt="Imagen decorativa")
            .col-lg-8
              .h4 Consumo Promedio Diario (CPD):
              p.mb-0 CPD = Consumo mensual / 30

      .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG07.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-4.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img07.svg' alt="Imagen decorativa")
            .col-lg-8
              .h4 <em>Stock</em> de seguridad (SS):
              p.mb-0 SS = CPD x días de reserva

      .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG07.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-4.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img08.svg' alt="Imagen decorativa")
            .col-lg-8
              .h4 Punto de pedido (PP):
              p.mb-0 PP = (CPD x tiempo de entrega) + SS 

      .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG07.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-4.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img09.svg' alt="Imagen decorativa")
            .col-lg-8
              .h4 <em>Stock</em> mínimo (SM):
              p.mb-0 SM = CPD x tiempo de entrega

      .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG07.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-4.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img10.svg' alt="Imagen decorativa")
            .col-lg-8
              .h4 <em>Stock</em> máximo (SMax):
              p.mb-0 SMax = PP + (CPD x tiempo adicional) 

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Ejemplo práctico de cálculo de <em>stock</em>
    
    p.mb-5(data-aos="fade-down") Una vez conocidas las fórmulas básicas para el cálculo de inventarios, resulta fundamental aplicar estos conceptos en un contexto real. Esto permite comprender cómo se utilizan los datos y cómo se toman decisiones informadas en la gestión del <em>stock</em>. A continuación, se presenta un ejemplo práctico que facilita su comprensión y aplicación:

    .row.justify-content-center.mb-0(style="display: flex; width: 100%; margin: auto;")(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.mb-4
          .col-lg-8.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-4
              p.mb-4(data-aos="fade-down") Una farmacia institucional consume 90 frascos de amoxicilina al mes. El proveedor tarda 5 días en entregar el pedido y se desea mantener un <em>stock</em> de seguridad equivalente a 2 días de consumo. Entonces:
              .row.justify-content-center.mb-4
                .col-lg-7.col-12
                  ul.lista-ul--color(data-aos="fade-down")
                    li.mb-2
                      i.fas.fa-chevron-right
                      | CPD: 90 ÷ 30 = 3 frascos / día
                    li.mb-2
                      i.fas.fa-chevron-right
                      | <em>Stock</em> de seguridad: 3 × 2 = 6 frascos
                    li.mb-0
                      i.fas.fa-chevron-right
                      | Punto de pedido: (3 × 5) + 6 = 21 frascos
              p.mb-0(data-aos="fade-down") Esto indica que cuando el inventario llegue a 21 frascos, debe realizarse el pedido para garantizar la disponibilidad continua del medicamento.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img11.svg', alt='Imagen decorativa')
        p.mb-0(data-aos="fade-down") Se recomienda realizar ejercicios adicionales con otros medicamentos o condiciones de entrega variables para fortalecer la comprensión del proceso de cálculo y adaptarlo a diferentes contextos.


</template>

<script>
export default {
  name: 'Tema5',
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
