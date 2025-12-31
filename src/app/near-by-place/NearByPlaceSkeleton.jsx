export default function NearByPlaceSkeleton() {
  return (
    <section className="section-spa padding-tb-50 near-by-place">
      <div className="container">
        <div className="row mb-minus-24">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-sm-6 mb-24">
              <div className="rx-spa-card skeleton">
                <div className="spa-img skeleton-img"></div>
                <div className="spa-contact p-4">
                  <div className="skeleton-title mb-2"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text short"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
