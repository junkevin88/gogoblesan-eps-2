// 

function update() {
    const select = document.getElementById("selection");
    const inputValue = document.getElementById("inputValue").value;
    const targetObject1 = document.getElementById("targetObject1");
    const targetObject2 = document.getElementById("targetObject2");
  
    switch (select.value) {
      case "Warna Latar":
        targetObject1.style.backgroundColor = inputValue;
        break;
      case "Warna Text":
        targetObject2.style.color = inputValue;
        break;
      case "Ukuran Text":
        targetObject2.style.fontSize = inputValue;
        break;
      case "Jenis Font":
        targetObject2.style.fontFamily = inputValue;
        break;
      case "Lebar Konten":
        targetObject1.style.width = inputValue+"px";
        break;
      case "Tinggi Konten":
        targetObject1.style.height = inputValue+"px";
        break;
      default:
        break;
    }
  }
  