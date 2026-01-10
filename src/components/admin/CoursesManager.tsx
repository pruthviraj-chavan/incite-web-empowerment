import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Trash2, Edit, BookOpen, Eye, EyeOff } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  icon: string;
  link: string | null;
  is_active: boolean;
  created_at: string;
}

const categories = [
  'MS-CIT',
  'KLiCK Courses',
  'GCC-TBC Govt Typing',
  'KLiCK Tally',
  'Programming',
  'IT Hardware',
  'Sarthi',
  'Designing',
  'General'
];

const icons = ['💻', '🖥️', '🎓', '📊', '⌨️', '🔧', '🎨', '📱', '🌐', '💡'];

const CoursesManager = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'General',
    duration: '',
    students: 0,
    rating: 4.5,
    icon: '💻',
    link: '',
    is_active: true
  });

  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setCourses(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const courseData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        duration: formData.duration,
        students: formData.students,
        rating: formData.rating,
        icon: formData.icon,
        link: formData.link || null,
        is_active: formData.is_active
      };

      let error;
      if (editingCourse) {
        const result = await supabase
          .from('courses')
          .update(courseData)
          .eq('id', editingCourse.id);
        error = result.error;
      } else {
        const result = await supabase
          .from('courses')
          .insert(courseData);
        error = result.error;
      }

      if (error) throw error;

      toast({ title: 'Success', description: editingCourse ? 'Course updated!' : 'Course created!' });
      setDialogOpen(false);
      resetForm();
      fetchCourses();
    } catch (error: any) {
      console.error('Course save error:', error);
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setEditingCourse(null);
    setFormData({
      title: '',
      description: '',
      category: 'General',
      duration: '',
      students: 0,
      rating: 4.5,
      icon: '💻',
      link: '',
      is_active: true
    });
  };

  const handleDelete = async (course: Course) => {
    if (!confirm('Delete this course?')) return;

    const { error } = await supabase.from('courses').delete().eq('id', course.id);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Deleted!' });
      fetchCourses();
    }
  };

  const toggleActive = async (course: Course) => {
    const { error } = await supabase
      .from('courses')
      .update({ is_active: !course.is_active })
      .eq('id', course.id);
    
    if (!error) {
      fetchCourses();
    }
  };

  const openEditDialog = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      category: course.category,
      duration: course.duration,
      students: course.students,
      rating: course.rating,
      icon: course.icon,
      link: course.link || '',
      is_active: course.is_active
    });
    setDialogOpen(true);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Courses</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="bg-gradient-to-r from-indigo-500 to-purple-600">
              <Plus className="w-4 h-4 mr-2" /> Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-white/20 text-white max-w-xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingCourse ? 'Edit Course' : 'Add New Course'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Title</Label>
                <Input 
                  value={formData.title} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="bg-white/10 border-white/20"
                  required
                />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea 
                  value={formData.description} 
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="bg-white/10 border-white/20"
                  rows={3}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select value={formData.category} onValueChange={(v) => setFormData({...formData, category: v})}>
                    <SelectTrigger className="bg-white/10 border-white/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Duration</Label>
                  <Input 
                    value={formData.duration} 
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="bg-white/10 border-white/20"
                    placeholder="e.g., 3 months"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Students</Label>
                  <Input 
                    type="number"
                    value={formData.students} 
                    onChange={(e) => setFormData({...formData, students: parseInt(e.target.value) || 0})}
                    className="bg-white/10 border-white/20"
                  />
                </div>
                <div>
                  <Label>Rating (0-5)</Label>
                  <Input 
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.rating} 
                    onChange={(e) => setFormData({...formData, rating: parseFloat(e.target.value) || 0})}
                    className="bg-white/10 border-white/20"
                  />
                </div>
                <div>
                  <Label>Icon</Label>
                  <Select value={formData.icon} onValueChange={(v) => setFormData({...formData, icon: v})}>
                    <SelectTrigger className="bg-white/10 border-white/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {icons.map(icon => (
                        <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Link (optional)</Label>
                <Input 
                  value={formData.link} 
                  onChange={(e) => setFormData({...formData, link: e.target.value})}
                  className="bg-white/10 border-white/20"
                  placeholder="https://example.com/course-details"
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch 
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData({...formData, is_active: checked})}
                />
                <Label>Active (visible on website)</Label>
              </div>
              <Button type="submit" disabled={saving} className="w-full bg-gradient-to-r from-indigo-500 to-purple-600">
                {saving ? 'Saving...' : (editingCourse ? 'Update Course' : 'Add Course')}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      ) : courses.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No courses added yet</p>
          <p className="text-sm mt-1">Static courses from code will still display on the website</p>
        </div>
      ) : (
        <div className="space-y-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-center gap-4">
              <div className="text-3xl">{course.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-white truncate">{course.title}</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-500/20 text-indigo-300">
                    {course.category}
                  </span>
                  {course.is_active ? (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Active</span>
                  ) : (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-500/20 text-gray-400">Inactive</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 truncate">{course.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {course.duration} • {course.students} students • ⭐ {course.rating}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={() => toggleActive(course)} className="text-gray-400 hover:text-white">
                  {course.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => openEditDialog(course)} className="text-gray-400 hover:text-white">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleDelete(course)} className="text-red-400 hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesManager;