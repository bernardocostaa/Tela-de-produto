const fotos = document.querySelectorAll('.fotos-secun img')



function trocarFoto(e){
  const fotoPrin = document.querySelector('.foto-prin img')
 const srcFoto =  e.target
 const fotoAntes = fotoPrin.getAttribute('src')
 fotoPrin.setAttribute('src', srcFoto.getAttribute('src'))
 srcFoto.setAttribute('src', fotoAntes)
 console.log(srcFoto);
 console.log(fotoAntes);
 console.log(fotoPrin);
}

fotos.forEach((item)=>{
  item.addEventListener('click',trocarFoto)
})


function adicionar(){
  const ativar = document.querySelector('.modal-cont')
  ativar.classList.add('ativo')
  setTimeout(()=>{
    ativar.classList.remove('ativo')
  },2000)
}