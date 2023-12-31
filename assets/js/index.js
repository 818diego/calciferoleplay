document.addEventListener('DOMContentLoaded', function () {
    const discordButton = document.getElementById('discordBtn');
    const fivemButton = document.getElementById('fivemBtn');
    const tiendaBuy = document.getElementById('tiendaBuy');
    const explorarButton = document.getElementById('explorarBtn');


    discordButton.addEventListener('click', function () {
        console.log('Accediendo a Discord');
        window.open('https://discord.gg/calciferrp', '_blank');
    });

    fivemButton.addEventListener('click', function () {
        console.log('Accediendo a FiveM');
        window.open('https://cfx.re/join/dbx8my', '_blank');
    });

    tiendaBuy.addEventListener('click', function () {
        console.log('Accediendo a la tienda');
        window.open('https://calcifer-roleplay.tebex.io/', '_blank');
    });
});


// API DE DISCORD 

const guildId = '1094798603727405167';

fetch(`https://discord.com/api/guilds/1094798603727405167/widget.json`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud a la API de Discord:', error);
    });


// const clientId = '1190336739110301806';
// const redirectUri = 'http://127.0.0.1:5500/';
// const scope = 'identify'; // Puedes ajustar según tus necesidades

// // Construir el enlace de autorización
// const authorizationLink = `https://discord.com/api/oauth2/authorize?client_id=1190336739110301806&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A5500%2F&scope=identify`;

// // Redirigir al usuario a la página de autorización
// window.location.href = authorizationLink;
