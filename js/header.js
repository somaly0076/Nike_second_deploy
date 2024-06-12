// hover the navigation bar
const header = document.getElementById('header');
const footer = document.getElementById('footer');
// inject header and footer
header.innerHTML = `
<!-- start top navigation bar -->
    
<div class="top-background">
  <div class="top-nav">
    <div class="jordan-icon">
      <a >
        <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
            <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg>
      </a>
      <a>
          <svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33">
           <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path></svg>
      </a>
    </div>
    
    <div class="top-list">
      <ul>
        <li >Find a Store</li><span class="mr1-sm body-4" data-var="storeLocatorSeparator">|</span>
        <li >Help Us</li><span class="mr1-sm body-4" data-var="storeLocatorSeparator">|</span>
        <li >Join Us</li><span class="mr1-sm body-4" data-var="storeLocatorSeparator">|</span>
        <li >Sign In</li>
      </ul>
    </div>
  </div>
</div>

<!-- End of top navigation bar -->

<!-- Start big header for desktop screen -->
<header id="big-header">
  <div class="nike-icon" >
    <a href="index.html">
      <svg viewBox="0 0 24 24" ><path d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" ></path></svg>
    </a>

  </div>

  <nav>
    <div class="menu">
      <ul >
        <li>
          <a href="new-and-feature.html" id="nav-link-feature" class="nav-link  px-2">New & Featured</a>
        <div id="drop-down-feature" class="drop-down">
          <div class="inner-dropdown">
            <a href="" class="title"><strong>Mother's Day Shop</strong></a>
            <a href="">Shop the Collections</a>
            <a href="">Extra 25% Off <br>
              Select Styles</a>

          </div>
          <div class="inner-dropdown">
          <a href="" class="title"><strong>New & Featured</strong></a>
            <a href="" >New Arrivals</a>
            <a href="">Best Seller</a>
            <a href="">New & Upcomming <br> Drops</a>
            <a href="">Add to Bag to See <br> Price</a>

          </div>
          <div class="inner-dropdown">
            <a  class="title" href=""><strong>Trendding</strong></a>
            <a href="">ACG</a>
            <a href="">Lifestyle Running</a>
            <a href="">The Color Shop</a>
            <a href="">Shop Sport</a>
            <a href="">New in Jordan Shoes</a>

          </div>
          <div class="inner-dropdown">
            <a href="" class="title"><strong>Shop Classics</strong></a>
            <a href="">Dunck</a>
            <a href="">Air Jordan 1</a>
            <a href="">Air Force</a>
            <a href="">Air Max</a>
            <a href="">Blazer</a>
            <a href="">Vomero</a>

          </div>
          <div class="inner-dropdown">
            <a href="" class="title"><strong id="title">Explore</strong></a>
            <a href="">SNKRS Launch Calender</a>
            <a href="">Running Shoe Finder</a>
            <a href="">Bra Finder</a>
            <a href="">Product care</a>
            <a href="">Member Rewards</a>
            <a href="">Buying Guides</a>

          </div>

        </div>
        </li>
        <li>
          <a href="#" id="nav-link-men" class="nav-link px-2">Men</a>
          <div id="drop-down-men" class="drop-down ">
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Mother's Day Shop</strong></a>
              <a href="">Extra 25% Off <br>
                Select Styles</a>

            </div>
            <div class="inner-dropdown">
            <a href="" class="title"><strong>New & Featured</strong></a>
              <a href="" >New Arrivals</a>
              <a href="">Best Seller</a>
              <a href="">Add to Bag to See <br> Price</a>
              <a href="">New & Upcomming <br> Drops</a>

              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>Collections</strong></a>
                <a href="" >Trail Running Essentials</a>
                <a href="">New in Basketball</a>
                <a href="">ACG Essentials</a>
                <a href="">Nike Life</a>


              </div>
            

            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Shoes</strong></a>
              <a href="">All Shoes</a>
              <a href="">Lifestyle</a>
              <a href="">Jordan</a>
              <a href="">Dunk</a>
              <a href="">Lifestyle Running</a>
              <a href="">Air Max</a>
              <a href="">Air Force 1</a>
              <a href="">Training and Gym</a>
              <a href="">Basketball</a>
              <a href="">Running</a>
              <a href="">Nike SB</a>
              <a href="">Scandals & Slides</a>
              <a href="">Nike by You</a>
              <a href="">Shoes $100 & Under</a>
            
              
            

            </div>
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Clothing</strong></a>
              <a href="" >All Clothing</a>
              <a href="">Hoodies & Sweatshirts </a>
              <a href="">Pants and Tights</a>
              <a href="">Jackets & Vests</a>
              <a href="">Tops & T-Shirts</a>
              <a href="">Shorts</a>
              <a href="">Matching Sets</a>
              <a href="">Big & Tall</a>
              <a href="">Jordan</a>

              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>Accessories</strong></a>
                <a href="" >All Accessories</a>
                <a href="">Bags & Backpacks</a>
                <a href="">Hats & Headwear</a>
                <a href="">Socks</a>
              </div>
              

            </div>
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Shop by Sport</strong></a>
              <a href="">Basketball</a>
              <a href="">Running</a>
              <a href="">Golf</a>
              <a href="">Soccer</a>
              <a href="">Training & Gym</a>
              <a href="">Tennis</a>
              <a href="">Baseball</a>
              <a href="">Football</a>
              <a href="">Trail Running</a>
              <a href="">Swimming</a>
              <a href="">Pickleball</a>
              <a href="">Fan Gear</a>
            </div>
          </div>
        
        </li>
        <li>
          <a href="#" id="nav-link-women" class="nav-link px-2">Women</a>
          <div id="drop-down-women" class="drop-down ">
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Mother's Day Shop</strong></a>
              <a href="">Extra 25% Off <br>
                Select Styles</a>

            </div>
            <div class="inner-dropdown">
            <a href="" class="title"><strong>New & Featured</strong></a>
              <a href="" >New Arrivals</a>
              <a href="">Best Seller</a>
              <a href="">Add to Bag to See <br> Price</a>
              <a href="">New & Upcomming <br> Drops</a>

              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>Collections</strong></a>
                <a href="" >The Color Shop</a>
                <a href="">Zenvy Collection</a>
                <a href="">Loungewear</a>
                <a href="">Trail Running Essentials</a>


              </div>
            

            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Shoes</strong></a>
              <a href="">All Shoes</a>
              <a href="">Lifestyle</a>
              <a href="">Jordan</a>
              <a href="">Dunk</a>
              <a href="">Lifestyle Running</a>
              <a href="">Air Max</a>
              <a href="">Air Force 1</a>
              <a href="">Training and Gym</a>
              <a href="">Basketball</a>
              <a href="">Running</a>
              <a href="">Nike SB</a>
              <a href="">Scandals & Slides</a>
              <a href="">Nike by You</a>
              <a href="">Shoes $100 & Under</a>
            
              
            

            </div>
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Clothing</strong></a>
              <a href="" >All Clothing</a>
              <a href="">Hoodies & Sweatshirts </a>
              <a href="">Shorts</a>
              <a href="">Pants </a>
              <a href="">Leggings</a>
              <a href="">Jackets & Vests</a>
              <a href="">Tops & T-Shirts</a>
              <a href="">Skirt & Dresses</a>
              <a href="">Bras</a>
              <a href="">Matching Sets</a>
              <a href="">Plus Size</a>
              <a href="">Jordan</a>

              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>Accessories</strong></a>
                <a href="" >All Accessories</a>
                <a href="">Bags & Backpacks</a>
                <a href="">Hats & Headwear</a>
                <a href="">Socks</a>
              </div>
              

            </div>
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Shop by Sport</strong></a>
              <a href="">Basketball</a>
              <a href="">Running</a>
              <a href="">Golf</a>
              <a href="">Soccer</a>
              <a href="">Fitness</a>
              <a href="">Tennis</a>
              <a href="">Yoga</a>
              <a href="">Trail Running</a>
              <a href="">Softball</a>
              <a href="">Swimming</a>
              <a href="">Pickleball</a>
              <a href="">Fan Gear</a>
            </div>
          </div>
        

        </li>
        <li>
          <a href="#" id="nav-link-kids" class="nav-link px-2">Kids</a>
          <div id="drop-down-kids" class="drop-down">
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Mother's Day Shop</strong></a>
              <a href="">Extra 25% Off <br>
                Select Styles</a>

            </div>
            <div class="inner-dropdown">
            <a href="" class="title"><strong>New & Featured</strong></a>
              <a href="" >New Arrivals</a>
              <a href="">Best Selles</a>
              <a href="">Add to Bag to See Price</a>
              <a href="">All Sale</a>

              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>Collections</strong></a>
                <a href="" >EasyOn</a>
                <a href="">Teen Essentials</a>
                <a href="">New in Running</a>
                <a href="">New in Basketball</a>


              </div>
            

            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Shoes by Size</strong></a>
              <a href="">Big Kids (1Y - 7Y)</a>
              <a href="">Little Kids (8C - 3Y)</a>
              <a href="">Baby & Toddler (1C - 10C)</a>
          

              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>All Shoes</strong></a>
                <a href="">Lifestyle</a>
                <a href="">Jordan</a>
                <a href="">Dunk</a>
                <a href="">Lifestyle Running</a>
                <a href="">Air Max</a>
                <a href="">Air Force 1</a>
                <a href="">Basketball</a>
                <a href="">Running</a>
                <a href="">Scandals & Slides</a>
              </div>
            </div>
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Clothing by Size</strong></a>
              <a href="" >Big Kids (XS - XL)</a>
              <a href="">Little Kids (4 - 7) </a>
              <a href="">Baby & Toddler (0M - 4T)</a>
              <a href="">Extended Sizing</a>
            
              
              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>All Clothing</strong></a>
                <a href="" >Hoodies & Sweatshirts</a>
                <a href="">Pants & Tights</a>
                <a href="">Jackets & Vests</a>
                <a href="">Tops & T-Shirts</a>
                <a href="">Shorts</a>
                <a href="">Skirts & Dresses</a>
                <a href="">Bras</a>
                <a href="">Matching Sets</a>
                <a href="">Jordan</a>
                
              </div>
            </div>
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Shop by Sport</strong></a>
              <a href="">Basketball</a>
              <a href="">Running</a>
              <a href="">Golf</a>
              <a href="">Soccer</a>
              <a href="">Training & Gym</a>
              <a href="">Tennis</a>
              <a href="">Baseball</a>
              <a href="">Football</a>
              <a href="">Trail Running</a>
              <a href="">Swimming</a>
              <a href="">Pickleball</a>
              <a href="">Fan Gear</a>
              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>Accessories</strong></a>
                <a href="" >All Accessories</a>
                <a href="">Bags & Backpacks</a>
                <a href="">Hats & Headwear</a>
                <a href="">Socks</a>
              </div>
            </div>
          </div>
        
        </li>
      
        <li>
          <a href="#" id="nav-link-sale" class="nav-link px-2">Sale</a>
          <div id="drop-down-sale" class="drop-down">
            <div class="inner-dropdown">
              <a href="" class="title"><strong>Mother's Day Shop</strong></a>
              <a href="">Shop the Collections</a>
              <a href="">Extra 25% Off <br>
                Select Styles</a>

            </div>
            <div class="inner-dropdown">
            <a href="" class="title"><strong>All Sales</strong></a>
              <a href="" >Sale Shoes</a>
              <a href="">Sale Clothing</a>
              <a href="">Sale Accessories</a>
          
            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Men</strong></a>
              <a href="">Shoes</a>
              <a href="">Clothing</a>
              <a href="">Accessories</a>
              <a href="">Shop All</a>
      

            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Women</strong></a>
              <a href="">Shoes</a>
              <a href="">Clothing</a>
              <a href="">Accessories</a>
              <a href="">Shop All</a>

            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Kids</strong></a>
              <a href="">Shoes</a>
              <a href="">Clothing</a>
              <a href="">Accessories</a>
              <a href="">Shop All</a>
            </div>

          </div>
        
        </li>
        <li><a href="#" id="nav-link-jordan" class="nav-link px-2">Jordan</a>
          <div id="drop-down-jordan" class="drop-down">
            <div class="inner-dropdown">
            <a href="" class="title"><strong>New & Featured</strong></a>
              <a href="" >New Arrivals</a>
              <a href="">Best Seller</a>

              <div class="inner-dropdown second-list">
                <a href="" class="title"><strong>Collections</strong></a>
                <a href="" >Heat Check</a>
                <a href="">Trendding Color</a>
                <a href="">Golf Essentials</a>
                <a href="">Golf Lemonade Stand</a>
              </div>

            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Men</strong></a>
              <a href="">Shop All</a>
              <a href="">Shoes</a>
              <a href="">AJ1</a>
              <a href="">Clothing</a>
              <a href="">Basketball</a>

            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Women</strong></a>
              <a href="">Shop All</a>
              <a href="">Shoes</a>
              <a href="">AJ1</a>
              <a href="">Clothing</a>
              <a href="">Basketball</a>

            </div>
            <div class="inner-dropdown">
              <a  class="title" href=""><strong>Kids</strong></a>
              <a href="">Shop All</a>
              <a href="">Shoes</a>
              <a href="">AJ1</a>
              <a href="">Clothing</a>
              <a href="">Basketball</a>
              <a href="">Big Kids</a>
              <a href="">Little Kids</a>
              <a href="">Baby & Toddler</a>

            </div>
            <div class="inner-dropdown ">
              <a href="" class="title"><strong>Accessories</strong></a>
              <a href="" >Shop All</a>
              <a href="">Bags & Backpacks</a>
              <a href="">Hats & Headwear</a>
            
            </div>

          </div>
        </li>
      </ul>
    </div>

  </nav>
  <div class="search-area">
    <div class="search-input">
      
  <span>
    <svg  aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
  </span>
      <input type="text" name="" id="" placeholder="Search" >
    </div>
    <div >
    <div class="nav-icon heard-bag-icon" >
      <a href="">
        <svg viewBox=" 24 24" role="img" width="24px" height="24px" fill="none" style="z-index: 1;"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
      </a>
      <a href="">
        <svg  viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
      </a>

    </div>
  </div>

  </div>
</header>
<!-- End of big header for desktop screen -->

<!-- Start small header for phone and tablet screen -->
<header id="small-header">
  <div class="nike-icon" >
    <a href="">
      <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
    </a>
  </div>
  <div class="nav-icon" >
    <a href="">
      <svg  aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
    </a>          <a href="">
      <svg  aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
    </a>
    <a href="">
    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph" style="display: inline-block;"><path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"></path></svg>
  </a>
  <a id="menu-icon">
    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path></svg>
  </a>
  </div>
  </header>

<!-- End of small header for phone and tablet screen -->
  
<!-- Start side bar menu for phone and tablet screen -->
      <div id="mobile-menu" class="mobile-menu z2 hide">
        <div class="mobile-menu-panel">
          <div id="close-icon" class="close-icon">
            <button > 
              <svg aria-hidden="true" class="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img" width="18px" height="18px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path></svg>
            </button>
          </div>
          <div class="menu-list">
            <button>New & Featured</button>
          <button >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
        </button>
          </div>
      <div class="menu-list">
        <button>Men</button>
      <button >
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
    </button>
  </div>
  <div class="menu-list">
    <button>Women</button>
  <button >
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
</button>
</div>
<div class="menu-list">
<button>Kids</button>
<button >
<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
</button>
</div>
<div class="menu-list">
<button>Sale</button>
<button >
<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
</button>
</div>
<div class="menu-list">
<button>Jordan</button>
<button >
<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
</button>
</div>

<div class="second-panel">
<div class="jordan-icon">
<a>
<svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
    <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg>
        </a>
        <a>
        Jordan
      </a>
</div>
<div class="jordan-icon">
        <a>
          <svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33">
          <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path></svg>
      </a>
      <a >
        Converse
      </a>
</div>
<div class="become-member">
<span >
Become a Nike Member for the best products, inspiration and stories in sport. <span><a >Learn more</a></span>
</span>
</div>
<div class="black-white-button">
<button type="button" class="btn btn-dark" >Join Us</button>
<button class="white-button" type="button" >Sign In</button>
</div>

<div class="menu-icon-list">
<ul>
<li>
<a href="">
  <div>
  <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
</div>
<p class="headline">Bag</p>
</a>
</li>
<li>
<a href="">
  <div>
    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"></path></svg>
</div>
<p class="headline">Order</p>
</a>
</li>
<li>
<a href="">
  <div>
    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path></svg>
</div>
<p class="headline">Find a Store</p>
</a>
</li>
<li>
<a href="">
  <div>
    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"></path></svg>
</div>
<p class="headline">Help</p>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
`;
footer.innerHTML = `
<div class="inner-footer"  >
<div class="row">
  <div class="col-9 non-collapse">
    <div class= "row-cols-lg-4 row-cols-sm-3 row ">
      <div class="col">
        <ul class="nav flex-column px-6">
          <li  class="nav-item mb-2"><a href="#" >RESOURCES</a></li>
          <li class="nav-item mb-2"><a href="#" >GIFT CARDS</a></li>
          <li class="nav-item mb-2"><a href="#" >FIND A STORE</a></li>
          <li class="nav-item mb-2"><a href="#" >BECOME A MEMBER</a></li>
          <li class="nav-item mb-2"><a href="#" >NIKE X NBA</a></li>
          <li class="nav-item mb-2"><a href="#" >NIKE JOURNAL</a></li>
          <li class="nav-item mb-2"><a href="#" >Site Feedback</a></li>
        </ul>

      </div>
      <div class="col">
        <ul class="nav flex-column px-6">
          <li class="nav-item mb-2"><a href="#" >HELP</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Get Help</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#"  >Order Status</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Shipping and Delivery</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Returns</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Order Cancellation</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Payment Options</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Gift Card Balance</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Contact Us</a></li>
        </ul>
      </div>
      <div class="col">
        <ul class="nav flex-column px-6">
          <li class="nav-item mb-2 "><a href="#" >COMPANY</a></li>
          <li class="nav-item mb-2 gray_font"><a href="about-nike.html" >About Nike</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >News</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Careers</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Investors</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Purpose</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Sustainability</a></li>
        </ul>
      </div>
      <div class="col">
        <ul class="nav flex-column px-6">
          <li class="nav-item mb-2 "><a href="#" >PROMOTIONS & DISCOUNTS</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Student</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Military</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Teacher</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >First Responders & Medical Professionals</a></li>
          <li class="nav-item mb-2 gray_font"><a href="#" >Birthday</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-show">
    <ul class="nav flex-column px-6">
      <li  class="nav-item mb-2"><a href="#" >RESOURCES</a></li>
      <li class="nav-item mb-2"><a href="#" >GIFT CARDS</a></li>
      <li class="nav-item mb-2"><a href="#" >FIND A STORE</a></li>
      <li class="nav-item mb-2"><a href="#" >BECOME A MEMBER</a></li>
      <li class="nav-item mb-2"><a href="#" >NIKE X NBA</a></li>
      <li class="nav-item mb-2"><a href="#" >NIKE JOURNAL</a></li>
      <li class="nav-item mb-2"><a href="#" >Site Feedback</a></li>
    </ul>
    <hr>
    <button class="accordion-footer">Help</button>
    <div class="panel">
    <ul class="nav flex-column px-6">
      <li class="nav-item mb-2 gray_font"><a href="#" >Get Help</a></li>
      <li class="nav-item mb-2 gray_font"><a href="#"  >Order Status</a></li>
      <li class="nav-item mb-2 gray_font"><a href="#" >Shipping and Delivery</a></li>
      <li class="nav-item mb-2 gray_font"><a href="#" >Returns</a></li>
      <li class="nav-item mb-2 gray_font"><a href="#" >Order Cancellation</a></li>
      <li class="nav-item mb-2 gray_font"><a href="#" >Payment Options</a></li>
      <li class="nav-item mb-2 gray_font"><a href="#" >Gift Card Balance</a></li>
      <li class="nav-item mb-2 gray_font"><a href="#" >Contact Us</a></li>
    </ul>
    </div>
    
    <button class="accordion-footer">COMPANY</button>
    <div class="panel">
      <ul class="nav flex-column px-6">
        <li class="nav-item mb-2 gray_font"><a href="about-nike.html" >About Nike</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >News</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >Careers</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >Investors</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >Purpose</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >Sustainability</a></li>
      </ul>
    </div>
    
    <button class="accordion-footer">PROMOTIONS & DISCOUNTS</button>
    <div class="panel">
      <ul class="nav flex-column px-6">
        <li class="nav-item mb-2 gray_font"><a href="#" >Student</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >Military</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >Teacher</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >First Responders & Medical Professionals</a></li>
        <li class="nav-item mb-2 gray_font"><a href="#" >Birthday</a></li>
    </div>
  </div>

  <div class="col-3">
    <div >
      <ul class="social-icon" >
        <li ><a href="#" ><svg  class="social-link-icon" width="30px" fill="#111" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z"></path></svg></a></li>
        <li ><a href="#" ><svg  class="social-link-icon" width="30px" fill="#111" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path></svg></a></li>
      <li ><a href="#" ><svg  class="social-link-icon" width="30px" fill="#111" height="30px" viewBox="0 0 24 24"><path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z"></path></svg></a></li>
      <li ><a href="#" ><svg  class="social-link-icon" width="30px" fill="#111" height="30px" viewBox="0 0 24 24"><path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z"></path></svg></a></li>
      </ul>
    </div>

  </div>
</div>
<div class="sub-footer">
  <div class="row">
    <div class="col-md-6 col-sm-6 pt-3 pb-8 location">
      <a href="" class="location-icon">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="18px" height="15px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" clip-rule="evenodd"></path></svg>
        <span>United States</span>
        <div class="copy-right">
          © 2024 Nike, Inc. All Rights Reserved

        </div>
        
      </a>
    

    </div>
    <div class="col-md-6 col-sm-6">
      <ul class="policy">
        <li>
          <a href="">
            Guides
          </a>
        </li>
        <li>
          <a href="">
            Terms of Sale
          </a>
        </li>
        <li>
          <a href="">
          Terms of Use
          </a>
        </li>
        <li>
          <a href="">
            Nike Privacy Policy
          </a>
        </li>
        <li>
          <img alt="Your Privacy Choices" class="d-sm-ib mr1-sm" src="https://static.nike.com/a/images/w_960,c_limit/81a78fa9-0756-42ac-adb0-33c0245bf27a/image.png">
          <a href="">
            Your Privacy Choices
          </a>
        </li>
        <li>
          <a href="">
          CA Supply chains Act
          </a>
        </li>
      </ul>
      </ul>

    </div>
  </div>
</div>
</div>
`;
const menu = document.querySelectorAll('.menu li');
// to make background blur when hovering
menu.forEach((li)=>{
  li.addEventListener('mouseover',function(){
    document.querySelector('main').style.filter = 'blur(4px)';
  })
  li.addEventListener('mouseout',function(){
    document.querySelector('main').style.filter = 'blur(0px)';
  })

})

menu[1].addEventListener('mouseover',function(){
  document.querySelector('main').style.filter = 'blur(4px)';
})

const drop_down = document.querySelector('.menu');
if (drop_down.style.visibility ==='visible'){
  console.log(drop_down.style.visibility)

}
console.log(drop_down.style)
// function to make menu slide from right to left
const menu_icon = document.getElementById('menu-icon');
const close_icon = document.getElementById('close-icon');
const mobile_menu = document.getElementById('mobile-menu');
menu_icon.addEventListener('click',function(){
    mobile_menu.style.right='0px'
    document.querySelector('main').style.filter= 'blur(4px)';

});
close_icon.addEventListener('click',function(){

    mobile_menu.style.right='-320px'
    document.querySelector('main').style.filter= 'blur(0px)';
});

// accordion from W3school
var acc = document.getElementsByClassName("accordion-footer");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}