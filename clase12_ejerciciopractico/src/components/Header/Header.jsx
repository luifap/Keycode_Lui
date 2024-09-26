import PropTypes from 'prop-types'

import BottonAtom from './components/BottonAtom'

const Header = ( {setShowComponent} ) => {
  return (
    <header>
        <nav>
            <ul>
                <BottonAtom text="Add Task" value= {true} setShowComponent = {setShowComponent} />
                <BottonAtom text="See Task" value= {false} setShowComponent = {setShowComponent} />
            </ul>
        </nav>
    </header>
  )
}

Header.propTypes = {
  setShowComponent: PropTypes.func.isRequired,
}

export default Header
