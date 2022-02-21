var div = document.getElementById('featured-cat');
     
    var arr2 = ["WOMEN'S CLOTHING","MEN'S CLOTHING","GIRL'S CLOTHING","BOY'S CLOTHING","ACCESSORIES","SHOES","BEDDING","KITCHEN & DINING","ELECTRONICS","BEAUTY","HEALTH & NUTRITION","KIDS"]
    var arr1 = ["https://www.shop.com/feo-cdn/u/U/ZE_rD6Z8o.webp","https://www.shop.com/feo-cdn/K/F/Qtd-cfXOQ.webp","https://www.shop.com/feo-cdn/R/e/AsXWp9_TE.webp","https://www.shop.com/feo-cdn/v/n/Libc98NtQ.webp","https://www.shop.com/feo-cdn/Z/6/trR8tECpk.webp","https://www.shop.com/feo-cdn/e/Y/iDi6096nM.webp","https://www.shop.com/feo-cdn/J/Z/7mAM1Uy4E.webp","https://www.shop.com/feo-cdn/_/M/mzr2PEm40.webp","https://www.shop.com/feo-cdn/p/h/TP1AMIUY0.webp","https://www.shop.com/feo-cdn/h/M/D3YLvIWH8.webp","https://www.shop.com/feo-cdn/3/X/r2woiNgDY.webp","https://www.shop.com/feo-cdn/y/j/jcY1qVHDA.webp"]
    for(var i = 0; i < arr1.length;i++){
       
        let categ = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = arr1[i];
        img.id = "cat-img"

        let p = document.createElement('p');
        p.innerHTML = arr2[i];
        categ.append(img,p)
        div.append(categ)
    }

    function fourp(arr1,append){
        var div = document.getElementById(`${append}`)
    
        for (var i = 0; i < arr1.length; i++) {

            let categ = document.createElement('div');

            let img = document.createElement('img');
            img.src = arr1[i];
            

            let p = document.createElement('p');
            p.innerHTML = `<p class="heavy ">2% <span><img id="prod-cashback"
                        src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt=""></span> Cashback</p>`
            categ.append(img, p)
            div.append(categ)
        }
    }
    let arr3 = ["https://www.shop.com/feo-cdn/v/G/6hV58886w.webp","https://www.shop.com/feo-cdn/R/f/dJZ50VhnQ.webp","https://www.shop.com/feo-cdn/c/P/T_yYXssHU.jpg","https://www.shop.com/feo-cdn/o/H/ok42HiJEA.webp"]
    fourp(arr3,"four-prod")

    let arr4 = ["https://www.shop.com/feo-cdn/v/Z/x1cdKtvSA.webp","https://www.shop.com/feo-cdn/x/X/HnBD7WoKY.webp","https://www.shop.com/feo-cdn/A/3/syZzNB7tQ.webp","https://www.shop.com/feo-cdn/g/k/xaONrtIZY.jpg"]
    fourp(arr4, "four-prod-2")

    let arrx = ["https://img.shop.com/Image/210000/214100/214196/products/561800349__175x175__.jpg","https://img.shop.com/Image/240000/243300/243396/products/603891601__175x175__.jpg","https://img.shop.com/Image/210000/214100/214196/products/935461732__175x175__.jpg","https://img.shop.com/Image/210000/214100/214196/products/561800354__175x175__.jpg","https://img.shop.com/Image/210000/214100/214196/products/1301699648__175x175__.jpg"]
   let arry = ["Isotonix OPC-3","Ultimate Aloe","Isotonix Daily Essentials Packet","Isotonix Digestive Enzymes","Isotonix Digestive Enzymes with"]
    
           function fun5prod(arr5,arr5n,append){
                for (let j = 0; j < 5; j++) {
                   let div = document.getElementById(`${append}`);
                   let categ = document.createElement('div');

                   let img = document.createElement('img');
                   img.src = arr5[j];


                   let p = document.createElement('p');
                   p.innerHTML = arr5n[j];
                   var rs = Math.floor((Math.random() * 299) + 149);
                   var p2 = document.createElement('p')
                   p2.innerHTML = `<p class="heavy prod-p"><span> Price -
                        <svg id="prod-doll" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-dollar-sign">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </span>${rs}
                </p>`

                   let p3 = document.createElement('p');
                   p3.innerHTML = `<p class="thin prod-p ">3% <span><img style=" margin-left:-0px; display: inline;
                                width: 15px;
                                height: 15px;
                               position: relative;
                               top: 2px" id="prod-cashback"
                            src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="">
                    </span> Cashback
                </p>`

                   categ.append(img, p, p2, p3)
                   div.append(categ)
               }
           }
        fun5prod(arrx, arry,"five-prod")



         function adcx(arr5, arr5n, append) {
                for (let j = 0; j < 5; j++) {
                    let div = document.getElementById(`${append}`);
                    let categ = document.createElement('div');

                    let img = document.createElement('img');
                    img.src = arr5[j];
                    let p = document.createElement('p');
                    p.className = "heavy"
                    p.innerHTML = arr5n[j];
                    categ.append(p,img)
                    div.append(categ)
                }
            }
           let  brandname = ["HEALTH & NUTRITION","BEAUTY","HOME AND CLEANING","BABY & KIDS","JEWLRY"]
            let ourbrandimg = ["https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg","https://img.shop.com/Image/homepage/lipstick1572880828301.jpg","https://img.shop.com/Image/homepage/home_ma1572880950379.jpg","https://img.shop.com/Image/homepage/baby-kids1572881179463.jpg","https://img.shop.com/Image/homepage/1840336563__225x225-img__.jpg"]
            adcx(ourbrandimg,brandname,"seven-prod")

             function ourbrand(arr5, arr5n, append) {
                    for (let j = 0; j < arr5.length; j++) {
                        let div = document.getElementById(`${append}`);
                        let categ = document.createElement('div');
                        categ.className = "carousel-cell";
                        let img = document.createElement('img');
                        img.src = arr5[j];


                        let p = document.createElement('p');
                        p.innerHTML = arr5n[j];
                        var rs = Math.floor((Math.random() * 299) + 149);
                        var p2 = document.createElement('p')
                        p2.innerHTML = `<p class="heavy prod-p"><span> Price -
                        <svg id="prod-doll" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-dollar-sign">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </span>${rs}
                </p>`

                        let p3 = document.createElement('p');
                        p3.innerHTML = `<p class="thin prod-p ">3% <span><img style=" margin-left:-0px; display: inline;
                                width: 15px;
                                height: 15px;
                               position: relative;
                               top: 2px" id="prod-cashback"
                            src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="">
                    </span> Cashback
                </p>`

                        categ.append(img, p, p2, p3)
                        div.append(categ)
                    }
                }
                let arrx1 = ["https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?size=300x300", "https://www.shop.com/feo-cdn/H/M/JE2hELzCI.webp", "https://www.shop.com/feo-cdn/o/A/uVjZv54sQ.webp", "https://www.shop.com/feo-cdn/k/Q/S_WGbofz4.webp", "https://www.shop.com/feo-cdn/o/A/uVjZv54sQ.webp", "https://www.shop.com/feo-cdn/k/Q/S_WGbofz4.webp", "https://www.shop.com/feo-cdn/P/n/1lyQnQt_c.webp", "https://www.shop.com/feo-cdn/_/6/S97dD9YHw.webp", "https://www.shop.com/feo-cdn/P/n/1lyQnQt_c.webp", "https://www.shop.com/feo-cdn/_/6/S97dD9YHw.webp", "https://www.shop.com/feo-cdn/B/t/_2NjOmClY.webp", "https://www.shop.com/feo-cdn/T/i/F3wqmmOMc.webp", "https://www.shop.com/feo-cdn/B/t/_2NjOmClY.webp", "https://www.shop.com/feo-cdn/T/i/F3wqmmOMc.webp", "https://www.shop.com/feo-cdn/J/d/ABJP_eRqc.webp", "https://www.shop.com/feo-cdn/A/L/NSF7CxBv8.webp", "https://www.shop.com/feo-cdn/E/t/BUe6ZDjCI.webp", "https://www.shop.com/feo-cdn/S/X/JR5rR-Amg.webp", "https://www.shop.com/feo-cdn/W/y/ao__9pFHc.webp", "https://www.shop.com/feo-cdn/W/y/ao__9pFHc.webp", "https://www.shop.com/feo-cdn/T/a/jGvb2PMno.webp", "https://www.shop.com/feo-cdn/s/5/G-VV-dpno.webp", "https://www.shop.com/feo-cdn/q/k/5S4Mo5XIk.webp", "https://www.shop.com/feo-cdn/u/i/3d1I_YDa0.webp", "https://www.shop.com/feo-cdn/L/v/2nuryAnlA.webp"];
                let arry1 = ["Isotonix Vitamin D with K2", "DNA Miracles Isotonix Immune", "Clear Maximum Hydration and protection", "Isotonix Vitamin C", "Clear Maximum Hydration and protection", "Isotonix Vitamin C", "Isotonix Bromolin Plus", "All Purpose Netural Concentrate", "Isotonix Vitamin C", "Isotonix Bromolin Plus", "Heavy Deauty Concentrate", "Isotonix Immune", "Isotonix Heavy Deauty", "Isotonix Vitamin D with K2", "DNA Miracles Isotonix Immune", "Clear Maximum Hydration and protection", "Isotonix Vitamin C", "Clear Maximum Hydration and protection", "Isotonix Vitamin C", "Isotonix Bromolin Plus", "All Purpose Netural Concentrate", "Isotonix Vitamin C", "Isotonix Bromolin Plus", "Heavy Deauty Concentrate", "Isotonix Immune"]

                ourbrand(arrx1, arry1, "carousel")

                // let ssign = document.getElementById('ssign');
                // ssign.addEventListener('click',()=>{
                   
                // })

                var row1prod1 = document.getElementById('row1-prod1')
                row1prod1.addEventListener('click',()=>{
                    window.location.href = "checkout.html"
                })