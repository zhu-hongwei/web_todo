<template>
  <router-view />
</template>

<style lang="scss">
#app {
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
}

input {
  height: 50px;
  border: none;
  padding: 0 5px;
  border-radius: 50px;
  background-color: #f5f5f7;
}

input:focus {
  outline: none;
}

:checked {
  border-radius: 50%;
}

button {
  height: 30px;
  border: none;
  padding: 0 10px;
  border-radius: 30px;
  color: #07c160;
  border: 2px solid #ffffff00;
  background-color: #f5f5f7;
  &:hover {
    // border: 2px solid #07c160;
    cursor: pointer;
  }
  &:active {
    opacity: .6;
  }
}
</style>
