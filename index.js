const mahasiswaNim = '11020389';
const updatedData = {
    nama: 'RivaldySultan',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Benteng Kidul City'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    const nim = "123477"; // Gantilah dengan nilai yang sesuai
    const baru = {
        nama: 'RivaldySultan',
        gender: 'L',
        prodi: 'TI',
        alamat: 'Benteng Kidul City'
    };
fetch(`http://localhost:3000/mahasiswa/${nim}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ baru }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));