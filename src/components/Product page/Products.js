import React from 'react';
import Nav from '../Navigations/Nav';
import Nav2 from '../Navigations/Nav2';
import ProductImg from '../Product page/img/productImg.webp';

function Products() {
  return (
    <div className='bg-light'>
      <>
        <Nav />
        <Nav2 />
        <div className='productsContainer container d-flex justify-content-between'>
          <div className='productsImg m-3'>
            <img src={ProductImg} className='w-100' alt='Product image' />
          </div>
          <div className='productShortDetails m-3'>
            <h3>
              Lunch Handbag OEM Insulation bag aluminum foil cationic portable
              lunch bag thickened insulation lunch bag Portable As Picture
              Regular
            </h3>
            <p>
              OEM Insulation bag aluminum foil cationic portable lunch bag
              thickened insulation lunch bag Portable
            </p>
            <p>US $9.0</p>
          </div>
          <div className='productToCart  m-3'>
            <div className='totalItems d-flex justify-content-between'>
              <p>subtotal (0 items)</p>
              <p>US $0</p>
            </div>
            <div className='estimatedTotal d-flex justify-content-between'>
              <p>Est. Total</p>
              <h3>US $0</h3>
            </div>
            <button className='btn btn-danger w-75 ms-5 border-round'>
              Start Order
            </button>
            <br /> <br />
            <button className='btn border btn-light w-75 ms-5 btn-border-round'>
              Add to Cart
            </button>
            <div className='inquire w-100 mt-3 text-center border p-3'>
              Inquire Now
            </div>
          </div>
        </div>
        <div className='productDetails container border-top py-3 my-3 d-flex'>
          <div className='details w-50'>
            <h3 className='text-danger mb-3'>Product Details</h3>
            <h6 className='mb-3'>Product Descriptions</h6>
            <p>
              Product name: Portable thermal insulation lunch bag Product
              number: 11293 Product alias: portable lunch bag / portable lunch
              bag Production process: transfer printing Product material:
              polyester fiber (Polyester) Pockets: none Pocket Type: Regular
              Thickness: Regular Waterproof degree: water repellent Suitable for
              the crowd: adults Other description: [Design description] Full
              printing, multi-sided printing [Material Description] Made of
              polyester fiber fabric, it is dirt-resistant and easy to clean.
              The interior is made of non-toxic aluminum foil, which is
              insulated, waterproof, leak-proof, dust-proof, and easy to clean.
              Give you a simple and elegant lifestyle. [Product Performance] The
              lunch bag is made of thick, high-quality aluminum foil insulation
              to keep food fresh (hot or cold depending on your needs) You can
              enjoy the most delicious food anytime, anywhere, stylish,
              insulated soft cooler lunch bag zipper Close completely to keep
              contents cool for hours [Applicable scene] Size: 8.5x8.5x4.6inch.
              This lunch bag looks small but has a large capacity, this spacious
              lunch tote easily holds all your snacks, drinks, sandwiches,
              fruits or vegetables you can bring to the office, or pack healthy
              snacks for your family or enjoy a great week day picnic.
              [Accessory structure] Easy to use, aluminum alloy insulation,
              convenient zipper, can also be used as a shopping bag for women.
              [Special note] This size data is due to different measurement
              methods, and the error within 1-2cm is a normal phenomenon. Design
              Tips: Front print area image size: 1087 * 745 px Image size of the
              back printing area: 1087 * 745 px C side printing area image size:
              1087 * 745 px D side printing area image size: 1087 * 745 px
              Reminder: The picture display effect is for reference only, and
              the final effect is subject to the actual product! Due to
              objective factors such as production batches, machinery and
              equipment, it is difficult to avoid or there will be errors such
              as slight color difference, position and size. If the above
              problems are normal, they will not be included in the scope of
              after-sales processing.
            </p>
          </div>
          <div className='packaging me-2 w-25'>
            <h3>Packaging & Delivery</h3>
          </div>
          <div className='company ms-2 w-25'>
            <h3>Company Profile</h3>
          </div>
        </div>
      </>
    </div>
  );
}

export default Products;
