<template>
  <div id="app">
    <div class="top-slanted"></div>
    <div class="body container">

      <div class="stay-top left">
        <span class="icon-view_headline"></span>
      </div>

      <div class="stay-top right">
        <img src="./assets/logo.png" alt="gp-calc logo" class="logo">
      </div>
      
      <main class="app-holder">

        <div class="header-text has-text-white has-text-centered">
          <h1 class="h3 has-text-weight-bold">CGPA CALCULATOR</h1>
          <p>Easily calculate and save your CGPA to keep track of your academic progress</p>
        </div>

        <router-view></router-view>

        <footer class="footer">
          Built by <span class="text-highlighted">Ilesanmi Temitope (Santiago)</span>
        </footer>
      </main>

    </div>
    
  </div>
</template>
  
<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url('../static/style.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css');

  :root{
    --primary-color: #1A237E;
    --secondary-color: #4527A0;
  }

  *{
    transition: .5s ease-in-out;
  }

  *:hover, *:focus{
    -webkit-transition: all .3s ease;
      transition: all .5s ease;
  }

  .footer{
    display: block;
    width: 100%;
    text-align: center;
    margin: 1.5rem 0
  }

  .stay-top{
    position: absolute;
    top: 1rem;
    color: #fff;
    font-size: 2rem;
  }

  .stay-top.left{
    left: 1rem;
  }

  .stay-top.right{
    width: 15%;
    right: 1rem;
  }

  .logo{
    width: 100px;
    height: auto;
  }

  .top-slanted{
    width: 100vw;
    height: 65vh;
    background-color: var(--secondary-color);
    z-index: 1;
    -webkit-clip-path: polygon(0 0, 0 80%, 100% 100%, 100% 0);
  }

  .body{
    position: absolute;
    display: flex;
    width: 100%;
    top:  0;
    left: 0
  }

  .app-holder{
    margin-top: 15vh;
    max-width: 512px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .header-text{
    padding: 0 1rem 1rem 1rem;
  }

  .text-primary-colored{
    color: var(--primary-color);
  }

  .bg-primary{
    background-color: var(--primary-color);
    color: #fff;
  }

  .bg-primary:hover{
    background-color: transparent;
    color: var(--primary-color);
  }

  .bg-secondary{
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    color: #fff;
  }

  .bg-secondary:hover{
    background-color: transparent;
    color: var(--secondary-color);
  }

  .ml-auto{
    margin-left: auto;
  }

  .mr-auto{
    margin-right: auto;
  }

  .d-flex{
    display: flex;
  }


</style>
