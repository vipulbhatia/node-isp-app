var express = require('express'),
    //cors = require('cors'),
    app = express();

var hitCount = 0;

//app.use(cors());

app.get('/providers', (req, res) => {
    ++hitCount;
    res.status(200).json({
        result: {
            hitCount: hitCount,
            providers: [
                { name: 'Tikona', rating: 4, lowest_price: 450, max_speed: 20, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contact_number: '011-22342213', image: 'https://www.freeiconspng.com/uploads/small-tree-icon-4.png', url: '_blank', email: '121@tikona.com' },
                { name: 'Airtel', rating: 3, lowest_price: 150, max_speed: 30, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contact_number: '011-22342213', image: 'https://www.freeiconspng.com/uploads/christmas-tree-star-png-image-gallery-11.png', url: '_blank', email: '121@airtel.com' },
                { name: 'MTNL', rating: 2, lowest_price: 250, max_speed: 50, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contact_number: '011-22342213', image: 'https://www.freeiconspng.com/uploads/tree-icon--flat-jewels-iconset--pixelkit-2.png', url: '_blank', email: '121@mtnl.com' },
                { name: 'BSNL', rating: 1, lowest_price: 550, max_speed: 10, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contact_number: '011-22342213', image: 'https://www.freeiconspng.com/uploads/auto-automobile-car-pictogram-service-traffic-transport--2.png', url: '_blank', email: '121@bsnl.com' },
                { name: 'ACT', rating: 4, lowest_price: 430, max_speed: 60, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contact_number: '011-22342213', image: 'https://www.freeiconspng.com/uploads/small-tree-icon-4.png', url: '_blank', email: '121@act.com' },
                { name: 'Jio', rating: 3, lowest_price: 410, max_speed: 80, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contact_number: '011-22342213', image: 'https://www.freeiconspng.com/uploads/christmas-tree-star-png-image-gallery-11.png', url: '_blank', email: '121@jio.com' },
                { name: 'Aircel', rating: 2, lowest_price: 400, max_speed: 15, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contact_number: '011-22342213', image: 'https://www.freeiconspng.com/uploads/tree-icon--flat-jewels-iconset--pixelkit-2.png', url: '_blank', email: '121@aircel.com' },
                { name: 'Vodafone', rating: 1, lowest_price: 150, max_speed: 25, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contact_number: '011-22342213', image: 'https://www.freeiconspng.com/uploads/small-tree-icon-4.png', url: '_blank', email: '121@vodafone.com' }
            ]
        }
    });
});

app.use(express.static(__dirname + '/dist/ISPApp/'));

app.listen(8081, () => {
    console.log('secure server started on port', 8081);
});
