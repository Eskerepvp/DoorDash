<button on:click={loadBypass}>
Bypass Now?
</button>

<script>
	function loadBypass() { 
    location.replace("https://door-dash.netlify.app/pages/games.html"); 
 }
</script>


<style>
  button {
  border:none;
  border-radius:25px;
  color:white;
  cursor:pointer;
  display:inline-block;
  font-size:inherit;
  font-family:inherit;
  margin:4px 2px;
  padding:16px 32px;
  text-align:center;
  text-decoration:none;
  transition-duration:0.4s;
  background-color:black;
  border:2px solid #008CBA;
  }

  button:hover {
    background-color:#008CBA;
  }
</style>
