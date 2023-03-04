<template>
  <div style="position: relative; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center;">
    <div style="padding-top: 50px">
      <div style="font-family: 'Bookman Old Style'; font-weight: bold; font-size: 20px"> Community Garden Sign in </div>
      <div style="align-items: center; text-align: center">
        <img src="/src/assets/login.png" width="120" height="120"  style="padding-top: 20px;"/>
      </div>
    </div>
    <div style="font-weight: bold; margin-top: 20px">
      <i> Follow the instructions below to sign in to dashboard </i>
    </div>
    <div style="padding-top: 20px">
      <p>
        <span style="font-weight: bold"> Username: </span> <input id="un" type="text" style="width: 600px; text-indent: 3mm; height: 30px; margin-left: 20px; font-family: 'Bookman Old Style'; border: solid 1px lightgrey; outline: none">
      </p>
      <p style="padding-top: 15px">
        <span style="font-weight: bold"> Password: </span> <input id="pwd" type="text" style="width: 600px; text-indent: 3mm; border: solid 1px lightgrey; outline: transparent; height: 30px; font-family: 'Bookman Old Style'">
      </p>
      <p style="display: flex; flex-direction: row; justify-content: center; justify-items: center; align-items: center; align-content: center">
        <button id="submit-btn" type="button" style="background-color: lightblue; color: white; cursor: pointer; font-family: 'Bookman Old Style'; border: solid 1px transparent; font-weight: bold; width: 50mm; height: 10mm;"> Login </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  mounted() {
    const submitButton = document.getElementById("submit-btn");

    submitButton.onclick = function(event){
      const un = String(document.getElementById("un").value);
      const pwd = String(document.getElementById("pwd").value);
      if(un.trim().length === 0)
      { window.alert("Username cannot be empty!"); return; }
      if(pwd.trim().length === 0)
      { window.alert("Password cannot be empty!"); return; }
      if(un.trim() !== "test-username")
      { window.alert("Invalid username!"); return; }
      if(pwd.trim() !== "test-password")
      { window.alert("Invalid password credentials!"); return; }
      const url = "https://witty-ocean-0485b6410.2.azurestaticapps.net/";
      window.location.assign('/');
    }
    submitButton.onmouseenter = function(e){submitButton.style.backgroundColor = 'blue'; }
    submitButton.onmouseleave = function(e){ submitButton.style.backgroundColor = 'lightblue'; }
  }
}

</script>

<style scoped>

</style>