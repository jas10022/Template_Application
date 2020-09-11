//////////////////////////////////////////////////////////
//
// Create by: Jaskaran Bakshi
// Date: May 14, 2020
// Organization: Orgs
//
//////////////////////////////////////////////////////////

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {StyleSheet} from "react-native";
import Edit_Profile from "./Edit_Profile";
import {Text} from "galio-framework";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class OrgsStatsScreenComponent extends React.Component {
    render() {
        return (
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Text>Dessert (100g serving)</Text> </TableCell>
                            <TableCell align="right"><Text>Calories</Text></TableCell>
                            <TableCell align="right"><Text>Fat&nbsp;(g)</Text></TableCell>
                            <TableCell align="right"><Text>Carbs&nbsp;(g)</Text></TableCell>
                            <TableCell align="right"><Text>Protein&nbsp;(g)</Text></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right"><Text>{row.calories}</Text></TableCell>
                                <TableCell align="right"><Text>{row.fat}</Text></TableCell>
                                <TableCell align="right"><Text>{row.carbs}</Text></TableCell>
                                <TableCell align="right"><Text>{row.protein}</Text></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

const styles = StyleSheet.create({
    table: {
        minWidth: 650,
    },
});

export default OrgsStatsScreenComponent;

