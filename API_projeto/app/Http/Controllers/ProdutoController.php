<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    public function index()
    {
        return response()->json(Produto::all());
    }

    public function store(Request $request)
    {
        $dados = $request->validate([
            'nome' => 'required|string|max:100',
            'descricao' => 'required|string',
            'marca' => 'required|string|max:100',
            'categoria' => 'required|string|max:100',
            'codigo' => 'required|string|max:20|unique:produtos,codigo',
            'preco' => 'required|numeric|min:0',
            'estoque' => 'required|integer|min:0',
            'data_validade' => 'required|date'
        ]);

        $produto = Produto::create($dados);

        return response()->json($produto, 201);
    }

    public function show(Produto $produto)
    {
        return response()->json($produto);
    }

    public function update(Request $request, Produto $produto)
    {
        $dados = $request->validate([
            'nome' => 'required|string|max:100',
            'descricao' => 'required|string',
            'marca' => 'required|string|max:100',
            'categoria' => 'required|string|max:100',
            'codigo' => 'required|string|max:20|unique:produtos,codigo,' . $produto->id,
            'preco' => 'required|numeric|min:0',
            'estoque' => 'required|integer|min:0',
            'data_validade' => 'required|date'
        ]);

        $produto->update($dados);

        return response()->json($produto);
    }

    public function destroy(Produto $produto)
    {
        $produto->delete();

        return response()->noContent();
    }
}