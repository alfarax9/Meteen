import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import MenuPreview from '../components/home/MenuPreview';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">
              Our Popular Menu
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Hidangan Populer Kami
            </h2>
            <p className="text-paragraph max-w-2xl mx-auto">
              Cicipi berbagai menu pilihan terbaik yang menjadi favorit pelanggan kami
            </p>
          </motion.div>

          <MenuPreview />

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" className="group">
                Lihat Semua Menu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">
                About Meteen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Selamat Datang di Restoran Meteen
              </h2>
              <p className="text-paragraph mb-6 leading-relaxed">
                Meteen adalah restoran yang menghadirkan pengalaman kuliner modern dengan sentuhan tradisional Indonesia. Kami berkomitmen untuk menyajikan hidangan berkualitas tinggi menggunakan bahan-bahan segar dan pilihan.
              </p>
              <p className="text-paragraph mb-8 leading-relaxed">
                Dengan tim chef berpengalaman dan suasana yang nyaman, kami siap memberikan pengalaman bersantap yang tak terlupakan untuk Anda dan keluarga.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-paragraph text-sm">Tahun Pengalaman</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-paragraph text-sm">Menu Pilihan</div>
                </div>
              </div>

              <Link to="/team">
                <Button size="lg">
                  Kenali Tim Kami
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Apa Kata Pelanggan Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Budi Santoso',
                role: 'Food Enthusiast',
                comment: 'Makanan di Meteen selalu fresh dan enak! Pelayanannya juga sangat memuaskan. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Sarah Wijaya',
                role: 'Regular Customer',
                comment: 'Suasananya nyaman dan makanannya lezat. Tempat favorit saya untuk makan bersama keluarga.',
                rating: 5,
              },
              {
                name: 'Ahmad Rizki',
                role: 'Business Owner',
                comment: 'Perfect place untuk meeting sambil makan. Menu variatif dan harga reasonable!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-paragraph mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-paragraph">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Untuk Menikmati Hidangan Terbaik?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Kunjungi kami sekarang atau hubungi untuk reservasi dan dapatkan pengalaman kuliner yang tak terlupakan
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Hubungi Kami Sekarang
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
