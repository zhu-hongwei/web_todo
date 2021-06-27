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
  color: #f40;
  background-color: #f5f5f7;
  &:hover {
    cursor: pointer;
  }
}
</style>
