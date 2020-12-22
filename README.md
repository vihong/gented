# gented


------ 1) STYLING 
props -> customisable à chaque instance d'un compoosant donné
styled-component -> générique et fixe à toutes les instances de ce composant
Why not keep everything in StyleSheet then? why mix both system?
Because styled component are an indicator you should NOT change the styling of this component.
It is attached to this particular atom or molecule.
As you grow in scale, organisms and templates and screen should not have any Styled components but only StyleSheet.


------ 2) TYPESCRIPT
TS a été utilisé pour checker les propTypes.
PropTypes are deprecated in react native.
An external library is required.


------ 3) CUSTOM COMPONENTS
les bouttons n'ont pas été utilisé mais on a nos props customed "Buttons"

