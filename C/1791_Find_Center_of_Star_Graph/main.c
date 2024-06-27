int findCenter(int** edges, int edgesSize, int* edgesColSize) {
    int* first_edge = edges[0];
    int* second_edge = edges[1];

    if (first_edge[0] == second_edge[0] || first_edge[0] == second_edge[1]) {
        return first_edge[0];
    } else {
        return first_edge[1];
    }
}