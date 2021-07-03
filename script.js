document.querySelector('.b-1').addEventListener('click', () => {
  document.querySelector('.i-1').value = 123;
});

document.querySelector('.b-2').addEventListener('click',()
=> {
    let data =+document.querySelector('.i-2').value; //4
    document.querySelector('out-2').innerHTML +=data;
});

