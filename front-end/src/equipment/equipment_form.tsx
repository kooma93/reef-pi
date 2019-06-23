import EditEquipment from './edit_equipment'
import EquipmentSchema from './equipment_schema.jsx'
import { withFormik } from 'formik'
import { outletsLoaded } from '../redux/actions/outlets';

const EditEquipmentForm = withFormik({
  displayName: 'EquipmentForm',
  mapPropsToValues: (props: {
    equipment: object,
    outlets: ,
    actionLabel: string
  }) => ({
    name: (props.equipment && props.equipment.name) || '',
    outlet: (props.equipment && props.equipment.outlet) || '',
    id: (props.equipment && props.equipment.id) || '',
    on: (props.equipment && props.equipment.on) || false,
    outlets: props.outlets,
    remove: props.remove
  }),
  validationSchema: EquipmentSchema,
  handleSubmit: (values, {props}) => {
    props.onSubmit(values)
  }
})(EditEquipment)

export default EditEquipmentForm
