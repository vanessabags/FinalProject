import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel fade>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325893210_1319254462196387_6158019807927633995_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=hEwS_Yw2cKsAX9piN8G&_nc_ht=scontent-lax3-2.xx&oh=00_AfDRVU0KmA8UCvNenp3ysFzfaawz1SOkWoVgtu-zj7TSng&oe=64CB6824"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='image-text'>Home</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://as2.ftcdn.net/v2/jpg/05/55/99/19/1000_F_555991991_GGfXpGb1KPMF4F0Mz5pAoiF42KM16LQ9.jpg"
              alt="Community"
            />

            <Carousel.Caption>
              <h3 className='image-text'>Home</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://as1.ftcdn.net/v2/jpg/05/19/19/62/1000_F_519196287_dvrSGgayiKqStT96hhcbBEDFYrgAqtMK.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='image-text'>Home</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://as2.ftcdn.net/v2/jpg/05/19/77/81/1000_F_519778195_uk9FEIHWlttXiVTMi6CHk2ZJqQQBwEqI.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3 className='image-text'>Home</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;