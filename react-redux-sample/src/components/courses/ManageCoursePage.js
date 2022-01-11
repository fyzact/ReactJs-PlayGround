import React, {
    useEffect
} from "react";
import {
    connect
} from "react-redux"
import {
    loadCourses
} from "../../redux/actions/courseActions"
import {
    loadAuthors
} from "../../redux/actions/authorActions"
import PropTypes from "prop-types";


function ManageCoursesPage({
    courses,
    authors,
    loadCourses,
    loadAuthors
}) {

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses();
        }

        if (authors.length === 0) {
            loadAuthors();
        }
    },[])

    return ( 
        <>
        <h2 > Manage Course </h2>
        </>
    )
}

function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors
    }
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors
}
ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);