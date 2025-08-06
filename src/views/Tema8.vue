<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 8
      h1 Gestión documental y análisis de reportes

    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Verificación de formatos de control

    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Análisis de reportes de inventario

</template>

<script>
export default {
  name: 'Tema8',
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
