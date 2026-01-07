export default function BlogSkeleton() {
    return (
        <div className="row">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-sm-6 mb-24">
                    <div className="card p-3">
                        <div className="skeleton-img mb-2"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text short"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
