   fetch("slnum.json")
        .then(res => res.json())
        .then(data => {
            sellerNumber = data.sellerNumber;
        });