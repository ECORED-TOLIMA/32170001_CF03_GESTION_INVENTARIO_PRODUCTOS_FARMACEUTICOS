<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 7
      h1 Herramientas tecnológicas para el control de inventario
    
    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Tecnologías aplicadas al inventario farmacéutico

    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Implementación de herramientas tecnológicas y sus desafíos

</template>

<script>
export default {
  name: 'Tema7',
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
