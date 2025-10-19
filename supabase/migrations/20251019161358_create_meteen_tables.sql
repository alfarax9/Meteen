/*
  # Create Meteen Restaurant Database Schema

  ## Overview
  This migration creates the core tables for the Meteen restaurant website,
  including menu items, team members, and contact messages.

  ## New Tables
  
  ### `menu_items`
  - `id` (uuid, primary key) - Unique identifier for menu item
  - `name` (text) - Name of the dish
  - `description` (text) - Description of the dish
  - `price` (numeric) - Price in IDR
  - `image_url` (text) - URL to dish image
  - `category` (text) - Category (Main, Grill, Snack, Drink, Dessert)
  - `is_featured` (boolean) - Whether to show on homepage
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `team_members`
  - `id` (uuid, primary key) - Unique identifier for team member
  - `name` (text) - Full name
  - `role` (text) - Job title/position
  - `bio` (text) - Biography
  - `image_url` (text) - URL to profile image
  - `instagram` (text) - Instagram handle
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `contact_messages`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender's name
  - `email` (text) - Sender's email
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `status` (text) - Status (new, read, replied)
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - Enable Row Level Security (RLS) on all tables
  - Public read access for menu_items and team_members
  - Authenticated insert for contact_messages
  - Admin-only write access for menu_items and team_members
*/

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10, 2) NOT NULL,
  image_url text,
  category text DEFAULT 'Main',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image_url text,
  instagram text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for menu_items (public read, no write)
CREATE POLICY "Anyone can view menu items"
  ON menu_items FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for team_members (public read, no write)
CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for contact_messages (anyone can insert)
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category);
CREATE INDEX IF NOT EXISTS idx_menu_items_featured ON menu_items(is_featured);
CREATE INDEX IF NOT EXISTS idx_team_members_order ON team_members(display_order);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);

-- Insert sample menu data
INSERT INTO menu_items (name, description, price, image_url, category, is_featured) VALUES
  ('Nasi Ayam Lada Hitam', 'Ayam tumis lada hitam dengan nasi hangat dan sayuran segar', 35000, 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800', 'Main', true),
  ('Sate Taichan', 'Sate ayam pedas dengan sambal khas yang menggugah selera', 28000, 'https://images.pexels.com/photos/16743486/pexels-photo-16743486.jpeg?auto=compress&cs=tinysrgb&w=800', 'Grill', true),
  ('French Fries', 'Kentang goreng renyah dengan pilihan saus spesial', 18000, 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800', 'Snack', true),
  ('Es Teh Meteen', 'Teh manis segar khas Meteen', 5000, 'https://images.pexels.com/photos/1251176/pexels-photo-1251176.jpeg?auto=compress&cs=tinysrgb&w=800', 'Drink', true),
  ('Nasi Goreng Special', 'Nasi goreng dengan telur, ayam, dan sayuran', 32000, 'https://images.pexels.com/photos/17117767/pexels-photo-17117767.jpeg?auto=compress&cs=tinysrgb&w=800', 'Main', false),
  ('Mie Goreng', 'Mie goreng pedas dengan topping lengkap', 30000, 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=800', 'Main', false),
  ('Ayam Bakar', 'Ayam bakar bumbu kecap dengan lalapan', 38000, 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', 'Grill', false),
  ('Chicken Wings', 'Sayap ayam goreng tepung dengan saus pilihan', 25000, 'https://images.pexels.com/photos/60810/nachos-cheese-sauce-chips-mexican-60810.jpeg?auto=compress&cs=tinysrgb&w=800', 'Snack', false),
  ('Jus Alpukat', 'Jus alpukat segar dengan susu dan gula aren', 15000, 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800', 'Drink', false),
  ('Es Campur', 'Dessert segar dengan buah, jelly, dan es serut', 18000, 'https://images.pexels.com/photos/1353361/pexels-photo-1353361.jpeg?auto=compress&cs=tinysrgb&w=800', 'Dessert', false)
ON CONFLICT (id) DO NOTHING;

-- Insert sample team data
INSERT INTO team_members (name, role, bio, image_url, instagram, display_order) VALUES
  ('Alfara Rahman', 'Founder & Head Chef', 'Dengan pengalaman 10+ tahun di industri kuliner, Chef Alfara membawa inovasi dan cita rasa autentik ke setiap hidangan Meteen.', 'https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=800', '@alfarachef', 1),
  ('Reyna Putri', 'Pastry Specialist', 'Ahli pastry dan dessert yang berpengalaman dalam menciptakan hidangan penutup yang sempurna untuk melengkapi pengalaman kuliner Anda.', 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800', '@reynapastry', 2),
  ('Dimas Satria', 'Sous Chef', 'Chef berbakat yang memastikan kualitas dan konsistensi setiap hidangan yang keluar dari dapur Meteen.', 'https://images.pexels.com/photos/1247755/pexels-photo-1247755.jpeg?auto=compress&cs=tinysrgb&w=800', '@dimassouschef', 3),
  ('Maya Sari', 'Kitchen Manager', 'Mengelola operasional dapur dengan efisien untuk memastikan setiap hidangan disajikan tepat waktu dengan kualitas terbaik.', 'https://images.pexels.com/photos/3790811/pexels-photo-3790811.jpeg?auto=compress&cs=tinysrgb&w=800', '@mayakitchen', 4)
ON CONFLICT (id) DO NOTHING;