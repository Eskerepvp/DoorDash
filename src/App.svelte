<script>
  import BypassButton from './lib/BypassButton.svelte'
</script>

<main>

  <h1>DoorDash</h1>

  <p>
  Doordash is a website to bypass GoGuardian
  </p>

  <BypassButton/>

</main>

<style>
  :root {
    background-color:#161923;
   font-family:monospace;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: white;
    
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    color:gray;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
