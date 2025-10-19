import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, ArrowLeft, Mail } from 'lucide-react';
import { supabase, TeamMember } from '../lib/supabase';
import Button from '../components/ui/Button';

const TeamDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchMember();
    }
  }, [id]);

  const fetchMember = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      setMember(data);
    } catch (error) {
      console.error('Error fetching team member:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Team member not found</h2>
          <Link to="/team">
            <Button>Back to Team</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/team" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Team
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={member.image_url || 'https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg'}
                    alt={member.name}
                    className="w-full h-[600px] object-cover"
                  />
                </div>
              </div>

              <div className="lg:pt-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">
                    Team Member
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                    {member.name}
                  </h1>
                  <p className="text-xl text-primary font-medium mb-8">
                    {member.role}
                  </p>

                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-paragraph leading-relaxed">
                      {member.bio || 'Seorang profesional kuliner yang berdedikasi untuk menghadirkan pengalaman kuliner terbaik di Meteen.'}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-lg font-semibold text-secondary mb-4">Connect</h3>
                    <div className="space-y-3">
                      {member.instagram && (
                        <a
                          href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-paragraph hover:text-primary transition-colors"
                        >
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Instagram className="w-5 h-5" />
                          </div>
                          <span className="font-medium">{member.instagram}</span>
                        </a>
                      )}
                      <a
                        href="/contact"
                        className="flex items-center gap-3 text-paragraph hover:text-primary transition-colors"
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5" />
                        </div>
                        <span className="font-medium">Contact via form</span>
                      </a>
                    </div>
                  </div>

                  <Link to="/team">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to All Team Members
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetail;
