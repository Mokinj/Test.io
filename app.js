document.addEventListener('DOMContentLoaded', function () {
    const resultMessageElement = document.getElementById('resultMessage');

    document.getElementById('submitButton').addEventListener('click', function () {
        resultMessageElement.innerText = 'Calling data from google.com...';

        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data received:', data);

                resultMessageElement.innerText = 'Data received: ' + JSON.stringify(data);
            })
            .catch(error => {
                console.error('Error:', error);

                resultMessageElement.innerText = 'Error: ' + error.message;
            });
    });
});