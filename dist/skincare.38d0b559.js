let previewContainer = document.querySelector('.product');
let previewBox = document.querySelectorAll('.preview');
document.querySelectorAll('.products .item').forEach((item1)=>{
    item1.onclick = ()=>{
        previewContainer.style.display = 'flex';
        let name = item1.getAttribute('id');
        previewBox.forEach((preview)=>{
            let item = preview.getAttribute('id-P');
            if (name == item) preview.classList.add('active');
        });
    };
});

//# sourceMappingURL=skincare.38d0b559.js.map
