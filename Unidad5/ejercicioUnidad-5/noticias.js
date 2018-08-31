$(function(){
    $('#tbNoticias').DataTable({

      language: {
        url:"http://cdn.datatables.net/plug-ins/1.10.12/i18n/Spanish.json"
    },
    responsive:true,


      ajax:{
        url:"http://localhost:3002/usuarios/v1/noticia/",
        dataSrc: function(datos){
          
          console.log(datos.noticias);
          return datos.noticias;
        }
      },
      columns:[
        {
          data:"titulo"
        },
        {
          data:"autor"
        },

        {
            data:"nota"
        },

        {
            data:"fecha"
        },

        {
            data:"activ0"
        },

        {
          targets:[0],
          data:"foto",
          render:function(data){
              return '<img height = "50" width = "50" src = "'+ data +'" /> '; 
          }
        }/*,
        {
          data:function(row){
            console.log(row.title)
            var res = `<button id="btnBorrar" class="btn btn-danger btn-xs"
            onclick="borrar('${row.title}')">
            Eliminar
            </button>`;
            return res
          }
        }*/
      ]
    });
});

function guardar(){
  //  var name = document.getElementById("txtNombre").value;
    var titulo = $('#txtTitulo').val(); //Jquery referirse a id = #
    //$('#txtNombre').val('Mi nombre');
    var autor = $('#txtAutor').val();
    var nota = $('#txtNota').val();
    var fecha = $('#txtFecha').val();
    var activo = $('#InputEstado').val();
    var foto = $('#txtFoto').val();



    console.log(titulo);
    console.log(autor);
    console.log(nota);
    console.log(fehca);
    console.log(activo);
    console.log(foto);

    $.ajax(
      {
        url:"http://localhost:3002/usuarios/v1/noticia/",
        type:"POST",
        data:{
          titulo:titulo,
          autor:autor,
          nota:nota,
          fecha:fecha,
          activo:activo,
          foto:foto
        }
      }
    )
    .done(
      function(data){
        alert(JSON.stringify(data));

        $('#txtTitulo').val('');
        $('#txtAutor').val('');
        $('#txtNota').val('');
        $('#txtFecha').val('');
        $('#InputEstado').val('');
        $('#txtFoto').val('');

        $('#tbNoticias').dataTable().api().ajax.reload();
      }
    )
    .fail(
      function(err){
        alert(err);
      }
    );
   
}

function borrar(title){
  $.ajax({
    url:"http://localhost:3002/usuarios/v1/noticia/"+title,
    type: "delete"
  })
  .done(
    function(data){
      alert (data.msg);
      $('#tbNoticias').dataTable().api().ajax.reload();
    }
  )
  .fail(
    function(err){
      alert(err);
    }
  )
}