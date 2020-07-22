import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../../model/project';

@Component({
    selector: 'propuesta-slider',
    templateUrl: './propuesta-slider.component.html',
    styleUrls: ['./propuesta-slider.component.scss']
})
export class PropuestaSliderComponent implements OnInit, OnChanges {
    @Input() project: Project;

    public propuestas: Array<Array<String>>;
    public propuestasResumen: String;
    public propuestaLink: String;
    public propuestaLinkBtnTxt: String;

    public buttonLink: String;
    public showChange: Boolean;
    public showAmnistia: Boolean;

    public punteoHasLi: Boolean;

    constructor() {
        // COMPONENTE INCLUÍDO EN:
        // pages/project-view/project-view.component.ts
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes.project){
        this.project = changes.project.currentValue

        this.showChange = false;
        this.showAmnistia = false;
        this.punteoHasLi=false;
        this.propuestaLinkBtnTxt='Leé más de este proyecto'

        switch(this.project.slug.toLowerCase()){
          case 'derechos-en-juego':
            this.showAmnistia = true;
            this.buttonLink = 'https://amnistia.org.ar/derechosenjuego/petitorio'
            break;
          case 'acuerdo-social-anticorrupcion':
            this.punteoHasLi = true;
            this.propuestaLinkBtnTxt='Leé el acuerdo completo'
            this.propuestaLink = 'https://acuerdoanticorrupcion.org/wp-content/uploads/2019/10/ASA-Versi%C3%B3n-abreviada-16-10-2.pdf'
            this.propuestasResumen = 'El Acuerdo Social Anticorrupción es convocado por <a target="_blank" rel="noopener noreferrer" href="https://acij.org.ar">ACIJ</a>, <a target="_blank" rel="noopener noreferrer" href="http://cipce.org.ar">CIPCE</a>, <a target="_blank" rel="noopener noreferrer" href="https://directoriolegislativo.org">Directorio Legislativo</a> y <a target="_blank" rel="noopener noreferrer" href="https://poderciudadano.org">Poder Ciudadano</a> junto a un amplio de organizaciones de la sociedad civil y especialistas, y contiene los siguientes apartados:'
            this.propuestas = [
              ["Un nuevo sistema nacional de integridad que incluya", "<li>Una nueva Ley de Ética en la función pública</li><li>Ingreso democrático a la función pública</li>"],
              ["La sanción de la corrupción pública y privada que incluya", "<li>La sanción de la corrupción a partir de una visión integral del fenómeno</li><li>Reformas procesales para la investigación de la corrupción.</li>"],
              ["Medidas para la prevención de la corrupción en situaciones típicamente críticas que incluyan", "<li>Un nuevo régimen de compras y contrataciones públicas</li><li>La prevención de desviaciones en el uso de recursos públicos para fines político-partidarios</li><li>Financiamiento de la política</li>"],
              ["Políticas de transparencia que incluyan", "<li>Acceso a la información pública</li><li>Transparencia presupuestaria y fiscal</li><li>Transparencia de los mercados financieros y control de la corrupción en el sector privado</li>"],
              ["Medidas para el Fortalecimiento institucional que incluyan", "<li>Independencia y eficacia del Poder Judicial</li><li>Fortalecimiento del rol de los Ministerios Públicos</li><li>Mejorar la eficacia los organismos de control </li><li>Reforma del sistema de inteligencia nacional</li>"],
              ["Estimular procesos de participación ciudadana que incluyan", "<li>Participación ciudadana en la prevención, investigación y sanción de la corrupción</li><li>Promover nuevos modelos de capacitación e investigación sobre la corrupción desde una perspectiva basada en la igualdad, la justicia y la democracia</li>"],
            ]
            break;
          case 'vivienda':
            this.showChange = true;
            this.buttonLink = 'https://www.change.org/alquileresmasjustos'
            this.propuestaLink = 'https://propuestas.causascomunes.org/articulado?id=5d7a9a8aee136700188ea5be'
            this.propuestasResumen = 'Causas Comunes junto a Federación Nacional de Inquilinos y más organizaciones estamos desarrollando <strong><a target="_blank" rel="noopener noreferrer" href="https://propuestas.causascomunes.org/articulado?id=5d7a9a8aee136700188ea5be">un proyecto de ley</a></strong>, para presentar en el Congreso, que incluye los siguientes puntos:'
            this.propuestas = [
              ["Plazo mínimo", "El contrato de alquiler se extiende de 2 a 3 años de plazo mínimo."],
              ["Actualización del precio", "Se establece que los aumentos sean anuales (no semestrales), ajustados a partir de un índice de actualización objetivo."],
              ["Depósito", "Se reduce el depósito en garantía a un mes de alquiler, a devolverse en el momento de restitución del inmueble y con el monto actualizado al valor del último mes de alquiler."],
              ["Registro de contratos", "El locador tiene la obligación de declarar el contrato ante el registro de la propiedad inmueble, para “blanquear” los contratos."],
              ["Renovación del contrato", "Se obliga a acordar las condiciones de la renovación con tres meses de antelación al fin del contrato."],
              ["Impuestos y expensas extraordinarias", "El inquilino no tendrá a su cargo el pago de las expensas comunes extraordinarias."],
              ["Arreglos", "El proyecto establece de qué forma y en qué plazos deben las partes ante un problema que demande reparaciones en el inmueble."],
              ["Resolución anticipada", "Se elimina el plazo mínimo de seis meses para rescindir el contrato, que se podrá rescindir en cualquier momento (pagando una multa)"],
              ["Domicilio electrónico", "Las partes deben fijar un domicilio electrónico (mail) en el contrato de alquiler, para que todas las comunicaciones por ese medio sean válidas y vinculantes."],
              ["Pagarés", "El proyecto prohíbe a los propietarios exigir la firma de pagarés a los inquilinos."],
            ];
            break;
          case 'trabajo':
            this.showChange = true;
            this.buttonLink = 'https://www.change.org/derechoslaborales'
            this.propuestaLink = 'https://propuestas.causascomunes.org/articulado?id=5d7a9b11ee136700188ea5c0'
            this.propuestasResumen = 'Causas Comunes junto al <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/odiaasoc">Observatorio de Derechos de Internet en Argentina (O.D.I.A)</a> y más organizaciones estamos desarrollando <strong><a target="_blank" rel="noopener noreferrer" href="https://propuestas.causascomunes.org/articulado?id=5d7a9b11ee136700188ea5c0">un proyecto de ley</a></strong>, para presentar en el Congreso, que incluye los siguientes puntos:'
            this.propuestas = [
              ["Plataformas digitales de servicios (pds)", "En el proyecto, se definen legalmente como “personas jurídicas que ofrecen sus prestaciones a través de una infraestructura digital cuyo propósito es organizar y controlar, por medio de algoritmos, la realización de los servicios conectando a los trabajadores con los clientes que los solicitan”."],
              ["Relación de dependencia", "Lxs trabajadorxs de plataformas no son “socios o colaboradores”, tampoco son “emprendedores”, son empleados en relación de dependencia que firman un contrato laboral."],
              ["Jornada autónoma (flexibilidad horaria)", "Lxs trabajadorxs tienen libertad para escoger sus horarios y cantidad de trabajo. eso sí, la jornada no podrá exceder las 12 horas al día, ni tampoco las 45 horas a la semana."],
              ["Control de la arbitrariedad", "Las pds deberán informar los criterios que la app utiliza para, entre otras cosas, asignar la prestación de un servicio, la forma de cálculo de la remuneración, el impacto que tienen las calificaciones que asignan."],
              ["Jornada pasiva", "El tiempo en que el/la trabajador/a se encuentra a disposición del empleador, es decir, conectado a la aplicación sin realizar labores, por causas que no le sean imputables forma parte de su jornada … y se paga."],
              ["Derecho a sindicalización", "Los trabajadores y trabajadoras de pds, tendrán el derecho de constituir las organizaciones sindicales que estimen convenientes."],
              ["Derechos fundamentales", "Entre otros, lxs trabajadorxs tendrán derecho a accionar por despidos injustificados y auto despido. además, tendrán seguro de riesgo de trabajo."],
            ];
            break;
          case 'drogas':
            this.showChange = false;
            this.propuestaLink = 'https://propuestas.causascomunes.org/articulado?id=5d8a2a8cee136700188ea5e8'
            this.propuestasResumen = 'Causas Comunes junto a las organizaciones que componen la <a target="_blank" rel="noopener noreferrer" href="http://regulacionlegal.org">Campaña Nacional por la Regulación del Cannabis</a> estamos desarrollando <strong><a target="_blank" rel="noopener noreferrer" href="https://propuestas.causascomunes.org/articulado?id=5d7a9bc8ee136700188ea5c4">un acuerdo</a></strong> que sirva de base para presentar, en el Congreso, un proyecto de ley que incluya los siguientes puntos:'
            this.propuestas = [
              ["Ordenar lo que hoy ya ocurre", "La propuesta de regulación legal se basa en el respeto por las libertades individuales y las prácticas culturales. se regula para minimizar las secuelas del narcotráfico y proteger la salud pública, no para promover el consumo."],
              ["Regular para aumentar la responsabilidad", "El objetivo de la regulación es tanto el consumo responsable del cannabis como su acceso en condiciones de máxima reducción de riesgos y de daños."],
              ["Regular la producción, distribución y comercialización", "La regulación busca ser estricta a la hora de evitar la publicidad y el lucro desmedido de nuevas corporaciones en torno al cannabis."],
              ["Protección de formas cooperativas", "La regulación protege el autocultivo y los clubes sociales y otras formas cooperativas de producción de cannabis, en tanto prácticas amparadas por la constitución y equilibradoras del precio de mercado."],
              ["No criminalizar la tenencia para consumo", "La regulación da estatus legal al “fallo arriola” de la corte suprema de justicia de la nación."],

            ];
            break;
          case 'transparencia':
            this.showChange = true;
            this.buttonLink = 'https://www.change.org/leydelobby'
            this.propuestaLink = 'https://propuestas.causascomunes.org/articulado?id=5d78f015ee136700188ea5bc'
            this.propuestasResumen = 'Causas Comunes junto a <a target="_blank" rel="noopener noreferrer" href="https://directoriolegislativo.org/">Directorio Legislativo</a> y más organizaciones estamos desarrollando <strong><a target="_blank" rel="noopener noreferrer" href="https://propuestas.causascomunes.org/articulado?id=5d78f015ee136700188ea5bc">un proyecto de ley</a></strong>, para presentar en el Congreso, que incluye los siguientes puntos:'
            this.propuestas = [
              ["Transparencia en organismos públicos", "El objetivo primordial del proyecto es asegurar que las decisiones públicas se tomen de la forma más abierta posible."],
              ["Registros digitales y de acceso público", "Los registros son actualizados una vez al mes, deben estar en formatos digitales de datos abiertos."],
              ["Se crean registros de reuniones", "En ellos, lxs miembrxs de la administración pública tienen que declarar todas las audiencias y reuniones con personas que se dedican al lobby o a la gestión de intereses particulares. también tienen que declarar viajes y regalos (aunque sean protocolares)"],
              ["Incluye funcionarixs de los 3 poderes", "Además, incluye a la defensoría del pueblo, a la auditoría general, al ministerio público, al consejo de la magistratura y a las empresas privadas con participación estatal mayoritaria."],
              ["Sanciones para quienes mientan", "No declarar audiencias o reuniones u omitir detalles relevantes se considera una falta grave"],
            ];
            break;
          case 'ambiente':
            this.showChange = true;
            this.buttonLink = 'https://www.change.org/agrotoxicos'
            this.propuestaLink = 'https://propuestas.causascomunes.org/articulado?id=5d7a9b68ee136700188ea5c2'
            this.propuestasResumen = 'Causas Comunes junto a distintxs activistas estamos desarrollando <strong><a target="_blank" rel="noopener noreferrer" href="https://propuestas.causascomunes.org/articulado?id=5d7a9b68ee136700188ea5c2">un proyecto de ley</a></strong> basado en uno del Senador Pino Solanas para presentar en el Congreso que incluye los siguientes puntos:'
            this.propuestas = [
              ["Áreas de protección ambiental", "Se prohíbe la aplicación de agroquímicos en áreas urbanas y a menos 1.500 metros de viviendas permanentes y escuelas rurales, entre otras formas de asentamientos humanos, y, también, de criaderos de animales, ríos, arroyos, lagunas, embalses, diques y pozos de agua."],
              ["Delito ambiental", "La aplicación de agroquímicos dentro de las áreas de protección se tipifica como “daño ambiental” y su responsabilidad no sólo le cabe a quien lo aplica sino también a los productores o propietarios del suelo y a las autoridades políticas, si es que no se muestran diligentes a la hora de evitar que se viole esta ley."],
              ["Lejos de niños, niñas y adolescentes", "Se prohibe la aplicación de agroquímicos y/o la manipulación de sus residuos en su presencia. también se restringe la posibilidad de encomendarles tareas que, en forma directa o indirecta, les vinculen con la manipulación de los mismos."],
              ["Sanciones", "Para quienes incumplieren, se establecen sanciones que van del “apercibimiento”, la “multa”, el “decomiso definitivo de vehículos utilizados al cometer la infracción” o la “inhabilitación de transportar y/o vender el producto cosechado”."],
              ["Aplicación aérea", "Se prohíbe la aplicación aérea de agrotóxicos."],
            ];
            break;
          case 'genero':
          default:
            this.showChange = true;
            this.buttonLink = 'http://www.change.org/menstruarsiniva'
            this.propuestaLink = 'https://propuestas.causascomunes.org/articulado?id=5d7a9c23ee136700188ea5c6'
            this.propuestasResumen = 'Causas Comunes junto a <a target="_blank" rel="noopener noreferrer" href="https://economiafeminita.com/">Economía Feminista</a> y más activistas estamos desarrollando <strong><a target="_blank" rel="noopener noreferrer" href="https://propuestas.causascomunes.org/articulado?id=5d7a9c23ee136700188ea5c6">un proyecto de ley</a></strong>, para presentar en el Congreso, que incluye los siguientes puntos:'
            this.propuestas = [
              ["Eliminación del iva a elementos para la gestión menstrual", "Se exime del pago de iva a toallas higiénicas, tampones, paños absorbentes lavables, esponjas marinas, copas menstruales, ropa interior absorbente y otros métodos que pudieran inventarse en el futuro."],
              ["Provisión gratuita", "De elementos para la gestión menstrual a niñas, adolescentes y personas que menstruen (entre la menarca y el climaterio) en escuelas, hospitales, cárceles y en paradores con gente en situación de calle."],
              ["Disponibilidad sin intermediarixs", "Toallas higiénicas, tampones, paños absorbentes lavables, esponjas marinas, copas menstruales y ropa interior absorbente deben estar a disposición en los lugares mencionados, respetando las elecciones personales e incorporando, asesorías para elegir el método, si la persona así lo desea,"],
              ["Capacitación en el sector público", "En todos los aspectos que conciernen a la higiene y salud durante el ciclo menstrual. la capacitación se orienta tanto de efectores de salud de docentes, en el marco de los lineamientos de la educación sexual integral (esi). asimismo, se ordena generar campañas de sensibilización y visibilización de la temática y  la creación de una línea de atención para la recibir consultas y brindar orientación."],
              ["Inclusión de insumos en el plan médico obligatorio", "Se asegura que las obras sociales y prepagas asumen parte de la responsabilidad en la distribución y provisión de los elementos mencionados."],
              ["Disposición de los desechos", "Los establecimientos públicos deberán contar con instalaciones sanitarias acordes y con protocolos de disposición de los desechos."],
            ];
            break;
        }//endswitch

        console.log(this.propuestas.length, this.propuestas[0][1])
        if (true || this.propuestas.length && this.propuestas[0][1].indexOf('<li>') != -1){
          for (var i = 0; i<this.propuestas.length; i++)
            this.propuestas[i][1] = this.propuestas[i][1].replace('<li>', '<li class="punteo-li">')
        }
      }//endif
    }

    public ngOnInit(): void {
    }

}
