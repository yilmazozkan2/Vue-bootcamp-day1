<template>
  <div class="container">
  <div class="header">
    <slot name="title"></slot>
  </div>
  <hr/>
  <slot/>
  <hr/>

  <div class="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur porro
    eos ducimus nostrum aspernatur atque iste, exercitationem ipsa nihil quas
    quasi ratione placeat repellat, fugiat nesciunt laborum, voluptatem neque?
  </div>
  <hr/>
  <div class="footer text-right">
       <button class="red">Kapat</button>
       <button class="green">Kaydet</button>
  </div>
</div>
</template>