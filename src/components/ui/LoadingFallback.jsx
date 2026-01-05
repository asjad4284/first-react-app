const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-800 font-playfair">
            Loading
          </h2>
          <div className="flex justify-center gap-1">
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingFallback
