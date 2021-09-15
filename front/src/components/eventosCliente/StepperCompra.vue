<template>
  <div class="contenido">
    <div class="progress">
      <ul>
        <li @click="changeClass">
          <div class="numero">
            <span>1</span>
          </div>
          <q-icon name="fas fa-check"></q-icon>
        </li>
        <li>
          <div class="numero">
            <span>2</span>
          </div>
          <q-icon name="fas fa-check"></q-icon>
        </li>
        <li>
          <div class="numero">
            <span>3</span>
          </div>
          <q-icon name="fas fa-check"></q-icon>
        </li>
      </ul>
      </div>
      <div>
      <form >
        <div class="page">
          Pagina 1
          For each ad campaign that you create, you can control how much you're willing to
          spend on clicks and conversions, which networks and geographical locations you want
          your ads to show on, and more.
          <button>Continuar</button>
        </div>
        <div class="page">
          Pagina 2
          For each ad campaign that you create, you can control how much you're willing to
          spend on clicks and conversions, which networks and geographical locations you want
          your ads to show on, and more.
          <button>Atras</button>
        <button>Continuar</button>
        </div>
        <div class="page">
          Pagina 3
          For each ad campaign that you create, you can control how much you're willing to
          spend on clicks and conversions, which networks and geographical locations you want
          your ads to show on, and more.
          <button>Atras</button>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  methods: {
    changeClass (e) {
      console.log(e.target)
    }
  }
}
</script>

<style scoped>
.progress ul {
  margin: 0 auto;
}

ul {
  width: fit-content;
  margin: 0;
  padding: 0;
}

ul li {
  display: inline-flex;
  justify-content: center;
  text-align: center;
  width: 116px;
  z-index: 1;
  position: relative;
}

.fas{
  display: none;
}

ul li .fas{
  width: 27px;
  height: 27px;
}

ul li .fas, ul li .numero{
  background-color: #ccc;
  color: #444;
  border-radius: 50%;
  text-align: center;
  padding: 5px;
}

ul li .numero{
  display: flex;
  width: 37px;
  height: 37px;
  justify-content: center;
  align-items: center;
}

ul  li .fas::after, ul  li .numero::after{
  content: '';
  background: #ccc;
  height: 2px;
  width: 116px;
  display: block;
  position: absolute;
  z-index: -1;
}
ul li:hover .fas,  ul  li:hover .numero{
  background-color:  var(--principal);
}
ul  li:hover .fas::after,  ul  li:hover .numero::after{
  content: '';
  background:  var(--principal);
  height: 2px;
  width: 116px;
  display: block;
  position: absolute;
  z-index: -1;
}
</style>
