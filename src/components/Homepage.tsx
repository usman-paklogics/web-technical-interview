import Homes from '../../data/homes.json';
import Card from './Card/Card';
export default function Homepage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="p-3">
          <div className="grid grid-cols-3 sm:grid-cols-12 xl:gap-10 lg:gap-8 sm:gap-5">
            {
              Homes?.length > 0 && Homes.map((home) => (
                <div className="col-span-3" key={home.id}>
                  <Card title={home.address} description={home.fullAddress} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
