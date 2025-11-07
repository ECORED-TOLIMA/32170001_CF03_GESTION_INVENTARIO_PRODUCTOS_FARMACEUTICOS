<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Métodos de control de inventario

    p.mb-5(data-aos="fade-down") El control de inventario en los servicios farmacéuticos consiste en aplicar un conjunto de técnicas, procedimientos y herramientas que permiten supervisar, verificar y mantener el estado real del inventario, comparándolo con los registros administrativos. Su finalidad es garantizar la disponibilidad, trazabilidad y calidad de los productos, evitando pérdidas, vencimientos, excesos o faltantes injustificados.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el contexto colombiano, estos métodos deben adaptarse a la capacidad operativa de cada establecimiento, desde droguerías pequeñas en zonas rurales hasta servicios institucionales de alta complejidad. La implementación adecuada permite cumplir con estándares normativos, optimizar recursos y mejorar la seguridad del paciente.
        br
        br
        p Los métodos se pueden clasificar en dos grandes grupos: tradicionales y complementarios.
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Métodos tradicionales
    
    p.mb-5(data-aos="fade-down") Son técnicas ampliamente utilizadas por su simplicidad, aplicabilidad y bajo costo. No requieren necesariamente herramientas tecnológicas, y pueden aplicarse incluso con registros manuales o en hojas de cálculo. Entre los más importantes se encuentran:

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial(data-aos="zoom-out")
          .row.justify-content-center.mb-4(numero="1" titulo="PEPS (Primero en Entrar, Primero en Salir)")
            .col-12.order-lg-1.order-2
              p Este método asegura la rotación por antigüedad, los productos que ingresan primero deben ser los primeros en ser dispensados o utilizados. Es obligatorio en la manipulación de medicamentos, especialmente aquellos con fecha de vencimiento cercana. Por ejemplo, si se reciben dos lotes de paracetamol, uno el 1 de junio y otro el 15, debe dispensarse primero el del 1 de junio.
            .col-12.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema4/img02.jpg', alt="Imagen decorativa")

          .row.justify-content-center.mb-4(numero="2" titulo="Conteo físico periódico")
            .col-12.order-lg-1.order-2
              p Consiste en revisar físicamente el inventario en intervalos regulares como mensual, bimestral o trimestral. Puede ser total, rotativo o selectivo, y ayuda a detectar diferencias, pérdidas o errores. Por ejemplo, una droguería realiza conteos físicos completos el último viernes de cada mes.
            .col-12.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema4/img03.jpg', alt="Imagen decorativa")

          .row.justify-content-center.mb-4(numero="3" titulo="Control Kardex")
            .col-12.order-lg-1.order-2
              p Es un registro manual o digital que detalla entradas, salidas y saldos de cada producto. Facilita la trazabilidad y es fundamental como respaldo ante auditorías. Por ejemplo, el auxiliar de farmacia actualiza a diario una hoja de Excel con los movimientos registrados.
            .col-12.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema4/img04.jpg', alt="Imagen decorativa")

          .row.justify-content-center.mb-4(numero="4" titulo="Inventario permanente o continuo")
            .col-12.order-lg-1.order-2
              p Requiere <em>software</em> especializado que actualiza el inventario en tiempo real tras cada movimiento (venta, dispensación o ingreso). Por ejemplo, una cadena de farmacias descuenta automáticamente un producto del inventario al facturarlo.
            .col-12.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema4/img05.jpg', alt="Imagen decorativa")

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Métodos complementarios
    
    p.mb-5(data-aos="fade-down") Estos métodos aportan una visión más estratégica y analítica, permitiendo priorizar recursos, clasificar productos y mejorar la toma de decisiones.

    .tarjeta.tarjeta--BG06.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Clasificación ABC
              p Ordena los productos según su valor económico y frecuencia de uso. Siendo A (alto costo, baja cantidad), B (costo y volumen intermedios) y C (bajo costo, alto volumen). Esta clasificación permite enfocar los controles en los productos más relevantes económicamente.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img06.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Análisis VEN (Vitales, Esenciales, No esenciales)
              p Clasifica los productos según su impacto terapéutico. Siendo V (indispensables para la vida), E (necesarios para condiciones frecuentes) y N (de uso complementario). Ayuda a priorizar compras y a mantener <em>stock</em> mínimo vital.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img07.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Combinación ABC-VEN
              p Permite una priorización más robusta al integrar criterios económicos y clínicos.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img08.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Muestreo o control selectivo
              p Aplica revisiones parciales del inventario, centrándose en productos críticos, de alta rotación o con historial de inconsistencias. Por ejemplo, cada semana se revisa un grupo específico de productos: antibióticos, psicotrópicos, etc.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img09.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Uso de códigos de barras y lectores
              p Es una herramienta tecnológica que agiliza la entrada y salida de productos, reduce errores humanos y mejora la trazabilidad. Por ejemplo, un establecimiento escanea los productos al recibirlos y los datos se cargan automáticamente al sistema.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img10.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Análisis de diferencias
              p Consiste en comparar el inventario físico con el registrado. Ante discrepancias, se deben identificar causas (errores, robos o vencimientos) y generar acciones correctivas documentadas. Por ejemplo, en una auditoría se detectan faltantes. Se revisan los registros y se descubre que no se reportó una devolución.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img11.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La adopción sistemática de estos métodos garantiza la fiabilidad del sistema de inventario, mejora la eficiencia operativa y permite tomar decisiones informadas. Además, fortalece la rendición de cuentas, facilita la ejecución de auditorías y protege los recursos institucionales. Cada establecimiento debe seleccionar y adaptar los métodos según su realidad operativa, buscando siempre una combinación que asegure continuidad, transparencia y calidad en la gestión farmacéutica.

</template>

<script>
export default {
  name: 'Tema4',
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
