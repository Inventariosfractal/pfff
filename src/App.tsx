import React, { useState } from 'react';
import { FileText, Users, BarChart3, Database, Mail, AlertCircle, CheckCircle, XCircle, Clock, MessageSquare, Star, TrendingUp, PieChart, Filter } from 'lucide-react';

interface TabButtonProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: (id: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ id, label, icon, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`tab-button flex items-center gap-2 px-6 py-3 font-medium transition-all duration-200 border-b-3 ${
      isActive 
        ? 'active text-[#94B43B] border-[#94B43B] bg-green-50' 
        : 'text-gray-600 border-transparent hover:text-[#94B43B] hover:bg-gray-50'
    }`}
  >
    {icon}
    {label}
  </button>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('objeciones');

  const tabs = [
    { id: 'objeciones', label: 'Objeciones Profesorales', icon: <AlertCircle size={20} /> },
    { id: 'encuesta', label: 'Encuesta Profesoral', icon: <MessageSquare size={20} /> },
    { id: 'ficha', label: 'Ficha Técnica', icon: <FileText size={20} /> },
    { id: 'datos', label: 'Datos Completos', icon: <Database size={20} /> }
  ];

  const renderObjecionesProfessorales = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <AlertCircle className="text-[#94B43B]" />
          Análisis de Objeciones Profesorales
        </h2>
        
        {/* Resumen Estadístico */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Objeciones Críticas</p>
                <p className="text-2xl font-bold text-red-700">23</p>
              </div>
              <XCircle className="text-red-500" size={24} />
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Observaciones</p>
                <p className="text-2xl font-bold text-yellow-700">45</p>
              </div>
              <Clock className="text-yellow-500" size={24} />
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Sugerencias</p>
                <p className="text-2xl font-bold text-blue-700">67</p>
              </div>
              <TrendingUp className="text-blue-500" size={24} />
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Comentarios Positivos</p>
                <p className="text-2xl font-bold text-green-700">89</p>
              </div>
              <CheckCircle className="text-green-500" size={24} />
            </div>
          </div>
        </div>

        {/* Categorías de Objeciones */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Filter className="text-[#94B43B]" size={20} />
              Categorías Principales de Objeciones
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-700 mb-2">Metodología de Evaluación</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Criterios de evaluación poco claros o subjetivos</li>
                  <li>• Falta de transparencia en el proceso de calificación</li>
                  <li>• Inconsistencias entre evaluadores</li>
                  <li>• Ausencia de retroalimentación constructiva</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-700 mb-2">Recursos y Condiciones Laborales</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Insuficiencia de recursos tecnológicos y bibliográficos</li>
                  <li>• Sobrecarga académica y administrativa</li>
                  <li>• Espacios físicos inadecuados para la enseñanza</li>
                  <li>• Falta de apoyo institucional para desarrollo profesional</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-700 mb-2">Comunicación Institucional</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Canales de comunicación ineficientes</li>
                  <li>• Falta de participación en decisiones académicas</li>
                  <li>• Información tardía sobre cambios normativos</li>
                  <li>• Ausencia de espacios de diálogo constructivo</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700 mb-2">Desarrollo Académico</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Limitadas oportunidades de capacitación</li>
                  <li>• Falta de incentivos para investigación</li>
                  <li>• Ausencia de programas de mentoría</li>
                  <li>• Desactualización de contenidos curriculares</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Análisis de Impacto */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <BarChart3 className="text-[#94B43B]" size={20} />
              Análisis de Impacto por Área
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Áreas Más Afectadas</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Ciencias Básicas</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Ingeniería</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Humanidades</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '58%'}}></div>
                      </div>
                      <span className="text-sm font-medium">58%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Nivel de Urgencia</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Crítico - Requiere acción inmediata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Alto - Atención prioritaria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Medio - Seguimiento regular</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Bajo - Monitoreo continuo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEncuestaProfesoral = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <MessageSquare className="text-[#94B43B]" />
          Comentarios y Observaciones de la Encuesta Profesoral
        </h2>

        {/* Categoría: Satisfacción General */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
            Satisfacción General con la Institución
          </h3>
          <div className="space-y-3 pl-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-green-400">
              <p className="text-gray-700">"La universidad ha mejorado significativamente en los últimos años, especialmente en infraestructura tecnológica."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Ingeniería</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-yellow-400">
              <p className="text-gray-700">"Aunque hay avances, aún falta mayor apoyo para proyectos de investigación interdisciplinarios."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Ciencias</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-red-400">
              <p className="text-gray-700">"La carga administrativa ha aumentado considerablemente, afectando el tiempo dedicado a la docencia e investigación."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Humanidades</span>
            </div>
          </div>
        </div>

        {/* Categoría: Recursos y Herramientas */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
            Recursos y Herramientas de Trabajo
          </h3>
          <div className="space-y-3 pl-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-green-400">
              <p className="text-gray-700">"Las nuevas plataformas digitales han facilitado mucho la gestión de clases virtuales y el seguimiento de estudiantes."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Educación</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-yellow-400">
              <p className="text-gray-700">"Los laboratorios necesitan actualización urgente. Algunos equipos tienen más de 10 años de antigüedad."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Ciencias Básicas</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-red-400">
              <p className="text-gray-700">"La biblioteca digital es insuficiente. Necesitamos acceso a más bases de datos especializadas."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Derecho</span>
            </div>
          </div>
        </div>

        {/* Categoría: Desarrollo Profesional */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
            Desarrollo Profesional y Capacitación
          </h3>
          <div className="space-y-3 pl-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-green-400">
              <p className="text-gray-700">"Los programas de capacitación en metodologías activas han sido muy útiles para mejorar mis clases."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Medicina</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-yellow-400">
              <p className="text-gray-700">"Sería valioso tener más oportunidades de intercambio académico con otras universidades."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Arquitectura</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-red-400">
              <p className="text-gray-700">"Los incentivos para investigación son limitados comparados con otras instituciones de la región."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Ingeniería</span>
            </div>
          </div>
        </div>

        {/* Categoría: Ambiente Laboral */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-teal-50 p-3 rounded-lg border-l-4 border-teal-500">
            Ambiente Laboral y Relaciones Interpersonales
          </h3>
          <div className="space-y-3 pl-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-green-400">
              <p className="text-gray-700">"El trabajo en equipo entre colegas ha mejorado notablemente con las nuevas políticas de colaboración."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Psicología</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-yellow-400">
              <p className="text-gray-700">"La comunicación con las directivas podría ser más fluida y transparente."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Economía</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-red-400">
              <p className="text-gray-700">"Existe tensión entre algunos departamentos que afecta el clima laboral general."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Ciencias Sociales</span>
            </div>
          </div>
        </div>

        {/* Categoría: Sugerencias de Mejora */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-500">
            Sugerencias de Mejora
          </h3>
          <div className="space-y-3 pl-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-blue-400">
              <p className="text-gray-700">"Implementar un sistema de mentoría para profesores nuevos sería muy beneficioso."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Administración</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-blue-400">
              <p className="text-gray-700">"Crear espacios de coworking para fomentar la colaboración interdisciplinaria."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Diseño</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-blue-400">
              <p className="text-gray-700">"Establecer un fondo semilla para proyectos de innovación educativa."</p>
              <span className="text-sm text-gray-500 mt-2 block">Profesor - Facultad de Tecnología</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFichaTecnica = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FileText className="text-[#94B43B]" />
          Ficha Técnica del Estudio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Información General</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Período de estudio:</span>
                  <span className="font-medium">Enero - Marzo 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Metodología:</span>
                  <span className="font-medium">Encuesta digital</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo de muestreo:</span>
                  <span className="font-medium">Censo poblacional</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Participación</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total profesores invitados:</span>
                  <span className="font-medium">450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Respuestas recibidas:</span>
                  <span className="font-medium">387</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tasa de respuesta:</span>
                  <span className="font-medium text-[#94B43B]">86%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Mail className="text-[#94B43B]" size={20} />
                Gestión de Correos Electrónicos
              </h3>
              
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-green-800 mb-2">Correos Válidos Procesados</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>profesor.ciencias@universidad.edu.co</span>
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>docente.ingenieria@universidad.edu.co</span>
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>academico.humanidades@universidad.edu.co</span>
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                  <div className="text-center text-gray-600 mt-2">
                    ... y 384 correos más válidos
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Correos Excluidos del Estudio</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span>externo.consultor@otrasede.edu.co</span>
                    <div className="flex items-center gap-1">
                      <XCircle size={16} className="text-red-600" />
                      <span className="text-xs text-red-600">Sede externa</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>visitante.internacional@universidad.org</span>
                    <div className="flex items-center gap-1">
                      <XCircle size={16} className="text-red-600" />
                      <span className="text-xs text-red-600">No pertenece a la sede</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-red-600 mt-2">
                  Total excluidos: 2 correos por no pertenecer a la sede de estudio
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribución por Facultades</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#94B43B]">89</div>
              <div className="text-sm text-gray-600">Ingeniería</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#94B43B]">76</div>
              <div className="text-sm text-gray-600">Ciencias</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#94B43B]">65</div>
              <div className="text-sm text-gray-600">Humanidades</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#94B43B]">157</div>
              <div className="text-sm text-gray-600">Otras</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDatosCompletos = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Database className="text-[#94B43B]" />
          Datos Completos del Estudio
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Documentos Analizados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-800 mb-2">Respuestas de Encuesta</h4>
                <p className="text-sm text-blue-700">387 formularios completos con respuestas detalladas de profesores</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-medium text-green-800 mb-2">Comentarios Cualitativos</h4>
                <p className="text-sm text-green-700">1,245 comentarios y observaciones categorizados por temas</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-medium text-purple-800 mb-2">Datos Demográficos</h4>
                <p className="text-sm text-purple-700">Información de facultades, experiencia y tipo de vinculación</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-medium text-orange-800 mb-2">Métricas de Satisfacción</h4>
                <p className="text-sm text-orange-700">Escalas Likert y indicadores cuantitativos de evaluación</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Metodología de Análisis</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Análisis Cuantitativo</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Estadística descriptiva</li>
                    <li>• Análisis de frecuencias</li>
                    <li>• Correlaciones entre variables</li>
                    <li>• Pruebas de significancia estadística</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Análisis Cualitativo</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Categorización temática</li>
                    <li>• Análisis de contenido</li>
                    <li>• Identificación de patrones</li>
                    <li>• Codificación de respuestas abiertas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Indicadores Clave de Rendimiento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Satisfacción General</span>
                  <Star className="text-yellow-500" size={16} />
                </div>
                <div className="text-2xl font-bold text-gray-800">7.2/10</div>
                <div className="text-sm text-gray-500">Promedio ponderado</div>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Participación</span>
                  <Users className="text-blue-500" size={16} />
                </div>
                <div className="text-2xl font-bold text-gray-800">86%</div>
                <div className="text-sm text-gray-500">Tasa de respuesta</div>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Confiabilidad</span>
                  <BarChart3 className="text-green-500" size={16} />
                </div>
                <div className="text-2xl font-bold text-gray-800">0.89</div>
                <div className="text-sm text-gray-500">Alpha de Cronbach</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Limitaciones del Estudio</h3>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <ul className="space-y-2 text-sm text-yellow-800">
                <li>• El estudio se limitó a profesores de planta y cátedra de la sede principal</li>
                <li>• No se incluyeron profesores visitantes o de intercambio</li>
                <li>• Algunas facultades tuvieron menor representación debido a su tamaño</li>
                <li>• Los resultados reflejan percepciones del período enero-marzo 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'objeciones':
        return renderObjecionesProfessorales();
      case 'encuesta':
        return renderEncuestaProfesoral();
      case 'ficha':
        return renderFichaTecnica();
      case 'datos':
        return renderDatosCompletos();
      default:
        return renderObjecionesProfessorales();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#94B43B] rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard Encuesta Profesoral</h1>
                <p className="text-sm text-gray-600">Análisis Integral - Período 2024</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                id={tab.id}
                label={tab.label}
                icon={tab.icon}
                isActive={activeTab === tab.id}
                onClick={setActiveTab}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="tab-content active">
          {renderTabContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>Dashboard de Análisis - Encuesta Profesoral 2024</p>
            <p className="mt-1">Datos actualizados: Marzo 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;