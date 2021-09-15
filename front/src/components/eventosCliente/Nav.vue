<template>
    <nav class="menu-container">
        <div class="menu menu-sin-login">
            <router-link
              @click.native="detectarClick"
              class="item-menu active"
              to="/eventos"
            >Eventos</router-link>
            <router-link
              @click.native="detectarClick"
              class="item-menu"
              to="/admin"
            >Admin</router-link>
            <router-link
              @click.native="detectarClick"
              class="item-menu"
              to="/login"
            >Iniciar Sesión</router-link>
            <router-link
              @click.native="detectarClick"
              class="item-menu item-menu_btn"
              to=""
            >Registrarte</router-link>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    detectarClick (e) {
      const clases = document.querySelectorAll('.active')
      if (clases.length !== 0) {
        clases.forEach(elemento => elemento.classList.remove('active'))
      }
      e.target.classList.toggle('active')
    }
  }
}
</script>

<style>
.menu-container{
    width: 200px;
    position: fixed;
    height: 211px;
    top: 80px;
    right: 20px;
}
.menu{
    display: flex;
    background-color: var(--color-text-light);
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #E5E5E5;
    text-align: center;
    border-radius: 10px;
}
.item-menu{
    padding: 10px 0px;
    text-decoration: none;
    color: var(--color-text-dark);
}
.item-menu:hover{
    background-color: #F2F2F2;
}
.active{
    font-weight: 700;
    color: var(--principal);
}
@media only screen and (min-width: 600px){
    .menu-container{
        top: 0;
        right: 0;
        width: auto;
        height: 100%;
        position: sticky;
    }
    .menu{
        height: 100%;
        align-items: center;
        flex-direction: row;
        border: none;
        background-color: transparent;
    }
    .item-menu{
        color: var(--color-text-light);
        padding: 20px 0px;
        margin-left: 30px;
    }
    .item-menu:hover{
        background-color: transparent;
    }
    .active{
        color: var(--principal);
        border-bottom: 3px solid var(--principal);
    }
    .item-menu_btn,
    .item-menu_btn.active,
    .item-menu_btn:hover{
        border-radius: 20px;
        padding: 10px;
        font-weight: normal;
        height: 40px;
        width: 120px;
        color: var(--color-text-dark);
        background-color: var(--principal);
    }
}
</style>
