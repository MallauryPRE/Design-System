export default function Typography() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-5xl mb-20 text-center">Typographie</h1>

      <div className="grid grid-cols-2 gap-8">
        {/* Poppins Section */}
        <div className="space-y-8">
          <h2 className="text-2xl italic">Poppins</h2>

          <div className="space-y-4">
            <p className="text-xl tracking-wide">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="text-xl tracking-wide">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="text-xl tracking-wide">0123456789*$?@#&çÇ</p>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Turpis eget fusce eros
              mauris feugiat odio aliquam facilisis. Condimentum gravida eget
              ullamcorper a senectus fermentum quam sed vitae.
            </p>
            <p className="text-base leading-relaxed">
              Nisi turpis mauris congue arcu eget nunc. Urna nisi adipiscing
              nisi pretium tellus urna. Velit posuere tellus ac velit volutpat
              eget. Ligula urna quis sed in fringilla nam dictum. Eget donec
              amet.
            </p>
          </div>

          <div className="flex gap-8">
            <span className="text-2xl">Regular</span>
            <span className="text-2xl font-bold">Bold</span>
          </div>
        </div>

        {/* Custom Font Section */}
        <div className="space-y-8">
          <h2 className="text-2xl" style={{ fontFamily: "BMRZDOOMLEFT" }}>
            BMRZDOOMLEFT
          </h2>

          <div className="space-y-4">
            <p
              className="text-xl tracking-wide"
              style={{ fontFamily: "BMRZDOOMLEFT" }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
            <p
              className="text-xl tracking-wide"
              style={{ fontFamily: "BMRZDOOMLEFT" }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
            <p
              className="text-xl tracking-wide"
              style={{ fontFamily: "BMRZDOOMLEFT" }}
            >
              0123456789*$?@#&çÇ
            </p>
          </div>

          <div className="space-y-4">
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "BMRZDOOMLEFT" }}
            >
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. TURPIS EGET FUSCE EROS
              MAURIS FEUGIAT ODIO ALIQUAM FACILISIS. CONDIMENTUM GRAVIDA EGET
              ULLAMCORPER A SENECTUS FERMENTUM QUAM SED VITAE.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "BMRZDOOMLEFT" }}
            >
              NISI TURPIS MAURIS CONGUE ARCU EGET NUNC. URNA NISI ADIPISCING
              NISI PRETIUM TELLUS URNA. VELIT POSUERE TELLUS AC VELIT VOLUTPAT
              EGET. LIGULA URNA QUIS SED IN FRINGILLA NAM DICTUM. EGET DONEC
              AMET.
            </p>
          </div>

          <div className="flex gap-8" style={{ fontFamily: "BMRZDOOMLEFT" }}>
            <span className="text-2xl">REGULAR</span>
            <span className="text-2xl font-bold">BOLD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
